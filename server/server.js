Meteor.startup(function (){


	//REMOVE THESE TO RETAIN NEW DB ENTRIES
	/*
	console.log('Clearing database... check server/server.js[ln:5] to stop this from happening.')
	Meteor.users.remove({});
	Requests.remove({});
	Transactions.remove({});
	*/

	//If Users collection is empty, fill it with seed!
	if( Meteor.users.find().count() === 0 ){
		console.log('No Users! Bootstrapping data from private/seed_users.json...');

		//import data from seed_users and add it to the collection
		var seedUsers = JSON.parse(Assets.getText("seed_users.json"));
		for(var i = 0; i < seedUsers.entries.length; i++){
			Meteor.users.insert(
				seedUsers.entries[i], 
				{ validate: false },
				function( error, result ){
					if( error ){
						console.log( error );
					}else{
						//console.log( result );
					}
				});
		}
	}

	//If Requests collection is empty, fill it with seed!
	if( Requests.find().count() === 0 ){
		console.log('No Request History! Bootstrapping data from private/seed_requests.json...');

		//import data from seed_requests and add it to the collection
		var seedRequests = JSON.parse(Assets.getText("seed_requests.json"));
		for( var i = 0; i < seedRequests.entries.length; i++ ){
			Requests.insert(
				seedRequests.entries[i], 
				{ validate: false },
				function( error, result ){
					if( error ){
						console.log( errors );
					}else{
						//console.log( result );
					}
				});
		}

		//link the imported requestsIDs with users in Meteor.users
		for( var i = 0; i < Requests.find({}).count(); i++ ){
			var randomID = getRandomDoc( Meteor.users )._id;
			Requests.update(
				{ requestorID : null },
				{ $set: { requestorID : randomID } },
				{ validationContext: "updateForm" },
				function( error, result ){
					if( error ){
						console.log( error );
					}else{
						//console.log( result );
					}
				});
		}
		Requests.update(
		{ requestorID : null },
		{ $set: { requestorID : getRandomDoc(Meteor.users)._id } },
		{ validationContext: "updateForm",
		  multi: true },
		function( error, result ){
			if( error ){
				console.log( error );
			}else{
				//console.log( result );
			}
	 	});

	 	//link requests to postedRequests[] for the selected user!
	 	var allRequests = Requests.find({}).fetch();
	 	for (var i = 0; i < allRequests.length; i++) {
	 		//get requestor and add the new request
	 		var requestor = Meteor.users.findOne({ _id : allRequests[i].requestorID });
	 		console.log(requestor._id);
	 		requestor.profile.postedRequests.push( allRequests[i].requestID );

	 		//commit changes to db
	 		Meteor.users.update(
	 				{ _id : requestor._id },
	 				{ $set : { profile : requestor.profile }},
	 				{ validationContext : "updateForm"},
	 				function( error, result ){
	 					if( error ){
	 						console.log( error );
	 					}else{
	 						//console.log( result );
	 					}
	 				}
	 			)
	 	};
	}

	//generate transactions
	if( Transactions.find().count() === 0 ){
		var numTransactions = 100;
		var maxAmount = 5.00;
		console.log('No Transaction History! Generating ' + numTransactions + ' fake transactions...');

		for (var i = 0; i < numTransactions; i++) {
			var request = getRandomDoc( Requests );
			//console.log(request.requestorID);
			var donor = getRandomDoc( Meteor.users );
			//console.log(donor._id);

			if( request.requestorID !== donor._id ){
			doTransaction( request._id, donor._id, (Math.round((Math.random()*maxAmount)*2)/2) );

			}		
		};		
	}
});
