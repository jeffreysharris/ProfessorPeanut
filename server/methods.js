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
				startDate : moment().format(),
				endDate : moment().add( args.duration, 'days'),
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
										//console.log( result );
									}
								});

			Meteor.users.update(
				{ _id : requestor._id },
				{ $set : { "profile.postedRequests" : requestor.profile.postedRequests }},
				{ validationContext: "updateForm" },
				function( error, result ){
					if( error ){
						console.log( error );
					}else{
						//console.log( result );
					}
				});
			return requestID;
		}else{
			throw new Meteor.Error("logged-out", 
  									"The client must be logged in to post a request.");
		}
	}
});