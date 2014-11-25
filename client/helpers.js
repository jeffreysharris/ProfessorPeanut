if (Meteor.isClient) {

	Template.dashboard.helpers({
		fullName: function(){
			return Meteor.user().profile.name.first + " " + Meteor.user().profile.name.last;
		}
	});
	Template.myProfile.helpers({
		firstName: function(){
			return Meteor.user().profile.name.first;
		},
		findRequests: function(){
			//Requests.remove({});
			var myRequest = Meteor.subscribe('myRequest', Meteor.userId());
			var requests = Requests.find({requestorID : Meteor.userId()});
			//myRequest.stop();
			return requests;
		}
	});
	Template.requests.helpers({
		request: function(){
			//Requests.remove({});
			var page = Meteor.subscribe('page', Session.get('currentPage'));
			var requests = Requests.find( { requestorID : { $not :  Meteor.userId()  } } );
			//page.stop();
			return requests;
		},
		requestor: function(requestorID){
			if(typeof requestorID !== null){
				var user = Meteor.users.findOne({"_id": requestorID});
				if(typeof user !== null){
					var name = user.profile.name.first + " " +user.profile.name.last;
					return name;
				} else return;
			} else return;
		},
		dateConvert: function(date){
			if(typeof date !== null) {
				var humaneDate = moment(date).format("dddd, MMMM Do YYYY, h:mm a");
				//console.log(humaneDate);
				return humaneDate;
			} else return;
		}
	});
};