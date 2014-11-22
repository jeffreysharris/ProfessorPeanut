Meteor.startup(function (){

	Meteor.users.remove({});
	Requests.remove({});

	if( Meteor.users.find().count() === 0 ){
		console.log('No Users! Bootstrapping data from private/seed_users.json');

		//import data from seed_users and add it to the collection
		var seedUsers = JSON.parse(Assets.getText("seed_users.json"));
		for(var i = 0; i < seedUsers.entries.length; i++){
			Meteor.users.insert(
				seedUsers.entries[i], 
				{ validate: false },
				function( errors, result ){
					if( errors ){
						console.log( errors );
					}else{
						//console.log( result );
					}
				});
		}
	}

	if( Requests.find().count() === 0 ){
		console.log('No Request History! Bootstrapping data from private/seed_requests.json');

		//import data from seed_requests and add it to the collection
		var seedRequests = JSON.parse(Assets.getText("seed_requests.json"));
		for( var i = 0; i < seedRequests.entries.length; i++ ){
			Requests.insert(
				seedRequests.entries[i], 
				{ validate: false },
				function( errors, result ){
					if( errors ){
						console.log( errors );
					}else{
						//console.log( result );
					}
				});
		}

		//link the imported requestsIDs with users in Meteor.users
		Requests.update(
		{ requestorID : null },
		{ $set: { requestorID : getRandomDoc( Meteor.users )._id } },
		{ validationContext: "updateForm",
		  multi: true },
		function( errors, result ){
			if( errors ){
				console.log( errors );
			}else{
				console.log( result );
			}
	 	});
	}

	if( Transactions.find().count() === 0 )
		console.log('Transactions History Empty');

});
