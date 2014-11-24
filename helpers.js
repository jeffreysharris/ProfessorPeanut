if (Meteor.isClient) {

	Template.dashboard.helpers({
		fullName: function(){
			return Meteor.user().profile.name.first + " " + Meteor.user().profile.name.last;
		}
	});
	Template.myProfile.helpers({
		firstName: function(){
			return Meteor.user().profile.name.first;
		}
	});
	Template.requests.helpers({
		request: function(){
			return Requests.find({});
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