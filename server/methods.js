if (Meteor.isServer){

Meteor.methods({
	/**
	 * Creates a new request in the 'Requests' db	
	 * @param  {Object} args is an object with format: {title: String,
	 *                       					  description : String,
	 *                       					  duration : Number (in days),
	 *                       					  targetFunding : Number (in dollars)}
	 * @return {MongoID}      requestID of the request created, or null
	 *                        if no request was created.
	 */	
	createRequest : function ( args ){

		//ensure the args are formatted correctly 
		//(not sure if order matters)
		check(args, {
			title: String,
			description: String,
			duration: Number,
			targetFunding: Number
		});

		if( this.userId ){
			var requestor = Meteor.users.findOne({ _id : this.userId });
			var request = {
				title : args.title,
				description : args.description,
				startDate : new Date(moment().format()),
				endDate : new Date(moment().add( args.duration, 'days').format()),
				targetFunding : args.targetFunding,
				requestorID : requestor._id,
			};

			var requestID = Requests.insert(	
								request,
								{validationContext : "insertForm"},
								function( error, result ){
									if( error ){
										console.log( error );
									}else{
										console.log( result );
									}
								});

			requestor.profile.postedRequests.active.push( requestID );
			Meteor.users.update(
				{ _id : requestor._id },
				{ $set : { "profile.postedRequests.active" : requestor.profile.postedRequests.active }},
				{ validationContext: "updateForm" },
				function( error, result ){
					if( error ){
						console.log( error );
					}else{
						console.log( result );
					}
				});
			return { result : requestID };
		}else{
			throw new Meteor.Error("logged-out", 
  									"The client must be logged in to post a request.");
		}
	},

	/**
	 * Takes any minimongo collection and returns a random document in 
	 * that collection. I'm not sure where to put this....
	 * @param  {db.collection} collection [any minimongo collection]
	 * @return {Object}            [a JSON formatted obect]
	 */
	getRandomUser : function (){
		var rand = Math.floor( Math.random() * (Meteor.users.find().count()-1) );
		var result = Meteor.users.findOne( {}, { skip : rand } );
		return { result : result };
	},

	getRandomRequest : function (){
		var rand = Math.floor( Math.random() * (Requests.find().count()-1) );
		var result = Requests.findOne( {}, { skip : rand } );
		return { result : result };
	},


	/**
	 * return the total number of pages requred to browse all content
	 * @param  {Number} limit Number of elements per page.
	 * @return {Integer}       Number of pages to display.
	 */
	getPageCount : function ( limit ){

		check( limit, Number );
		return { result : Math.ceil(Requests.find({}).count()/limit) };
	},

	/**
	 * Take a donor and a request and create a transaction between
	 * them. Also updates the donor's and recipient's records. 
	 * @param  {MongoID} requestID 	[Request to be fullfilled]
	 * @param  {MongoID} donorID 	[Donor's id (should this be username?)]
	 * @param  {Number}  amount 	[amount of donation]
	 * @return {boolean}        	[success / failure]
	 */	
	doTransaction : function ( args ){

		check(args, {
			donorID: String,
			requestID: String,
			amount: Number
		});

		var donor = {};
		if( args.donorID ){
			donor = Meteor.users.findOne({ _id : args.donorID });
		}else{
			throw new Meteor.Error("logged-out", 
  									"The client must be logged in to post a request.");
		}

		var request = Requests.findOne({ _id : args.requestID });
		var recipient = Meteor.users.findOne({ _id : request.requestorID });

		//create the transaction
		var transaction = {
			amount : args.amount,
			donorID : args.donorID,
			recipientID : recipient._id,
			requestID : args.requestID
		};
		var transactionID = Transactions.insert(	
								transaction,
								{validationContext : "insertForm"},
								function( error, result ){
									if( error ){
										console.log( error );
									}else{
										//console.log( result );
									}
								});

		//update request records
		request.currentFunding += args.amount;
		request.transactionIDs.push(transactionID);
		Requests.update(
			{ _id : request._id },
			{ $set : { currentFunding : request.currentFunding, transactionIDs : request.transactionIDs } },
			{ validationContext: "updateForm" },
			function( error, result ){
				if( error ){
					console.log( error );
				}else{
					//console.log( result );
				}
		 	});

		//update donor records
		donor.profile.completedTransactions.donations.push(transactionID);
		donor.profile.balance += args.amount;
		Meteor.users.update(
			{ _id : donor._id },
			{ $set : { profile : donor.profile } },
			{ validationContext: "updateForm" },
			function( error, result ){
				if( error ){
					console.log( error );
				}else{
					//console.log( result );
				}
		 	});

		//update recipient records
		recipient.profile.completedTransactions.receipts.push(transactionID);
		recipient.profile.balance -= args.amount;
		Meteor.users.update(
			{ _id : recipient._id },
			{ $set : { profile : recipient.profile } },
			{ validationContext: "updateForm" },
			function( error, result ){
				if( error ){
					console.log( error );
				}else{
					//console.log( result );
				}
		 	});
		console.log("Transaction Complete...");
		//TODO: Check request fulfillment after donation?
		return { result : transactionID };
	}
});
}