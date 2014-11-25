if (Meteor.isClient) {
/*CREATE NEW REQUEST*/
	Template.submitRequest.events({
		'submit form': function(e, template){
			e.preventDefault();
			var new_request = {
				title : template.find("#request_title").value,
				description : template.find("#request_description").value,
				duration : template.find("#request_duration").value,
				startDate: moment().toDate(),
				endDate: moment().add(template.find("#request_duration"), "days").toDate(),
				targetFunding : template.find("#request_targetFund").value,
				requestorID: Meteor.user()._id
			}
			Requests.insert(new_request, function(err, record){
				if(err){
					console.warn(err.message);
				} else {
					var dummy_array = Meteor.user().profile.postedRequests.active;
					dummy_array.push(record);
					Meteor.users.update({ _id : Meteor.user()._id },
					{ $set : { "profile.postedRequests.active" : dummy_array }},
					{ validationContext: "updateForm" },
					function( error, result ){
						if( error ){
							console.warn( error );
						}else{
							//console.log( result );
						}
					}
				)};
			});
			Router.go('home');
		}
	});

};