if (Meteor.isClient) {
	Template.dashboard.helpers({
		fullName: function(){
			return Meteor.user().profile.name.first + " " + Meteor.user().profile.name.last;
		},
	});
	Template.myProfile.helpers({
		firstName: function(){
			return Meteor.user().profile.name.first;
		}
	});
	Template.requests.helpers({
		requests: function(){
			return Requests.find();
		}
	});
};