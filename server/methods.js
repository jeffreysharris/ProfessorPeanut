Meteor.methods({
	createRequest : function ( args ){

		//ensure the args are formatted correctly 
		//(not sure if order matters)
		check(args, {
			title: String,
			description: String,
			duration: Number,
			targetFunding: Number
		});

		//if the method is called from a client, use their userId to create
		//the reqeust. If the method is called from the server (this.connection = null)
		//then get a random user to pair. 
		//TODO: add a login check
		var requestor = {};
		if( this.connection ){
			requestor = Meteor.users.findOne({ _id : this.userId });
		}else{
			requestor = getRandomDoc( Meteor.users );
		}

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

		//if endDate is in the past, push to completed requests
		if(~moment(request.endDate).fromNow().indexOf("ago")){
			requestor.profile.postedRequests.completed.push( requestID );
		}else{
			requestor.profile.postedRequests.active.push( requestID );
		}
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
	}
});