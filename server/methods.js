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
			return requestID;
		}else{
			throw new Meteor.Error("logged-out", 
  									"The client must be logged in to post a request.");
			console.log(": exited w/out insert");
		}
	},

	/**
	 * Takes any minimongo collection and returns a random document in 
	 * that collection. I'm not sure where to put this....
	 * @param  {db.collection} collection [any minimongo collection]
	 * @return {Object}            [a JSON formatted obect]
	 */
	getRandomDoc : function ( collection ){
		var rand = Math.floor( Math.random() * (collection.find().count()-1) );
		var result = collection.findOne( {}, { skip : rand } );
		return result;
	},

	/**
	 * return the total number of pages requred to browse all content
	 * @param  {Number} limit Number of elements per page.
	 * @return {Integer}       Number of pages to display.
	 */
	getPageCount : function ( limit ){
		return Math.ceil(Requests.find({}).count()/limit);
	},

	/**
	 * Take a donor and a request and create a transaction between
	 * them. Also updates the donor's and recipient's records. 
	 * @param  {MongoID} requestID 	[Request to be fullfilled]
	 * @param  {MongoID} donorID 	[Donor's id (should this be username?)]
	 * @param  {Number}  amount 	[amount of donation]
	 * @return {boolean}        	[success / failure]
	 */	
	doTransaction : function ( requestID, amount){

		if(this.connection){

		}

		var request = Requests.findOne({ _id : requestID });
		var donor = Meteor.users.findOne({ _id : donorID });
		var recipient = Meteor.users.findOne({ _id : request.requestorID });

		//create the transaction
		var transaction = {
			amount : amount,
			donorID : donorID,
			recipientID : recipient._id,
			requestID : requestID
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
		request.currentFunding += amount;
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
		donor.profile.balance += amount;
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
		recipient.profile.balance -= amount;
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
		//TODO: Handle failure (ISF, request already fulfilled, etc.)
		return true;
	}
});