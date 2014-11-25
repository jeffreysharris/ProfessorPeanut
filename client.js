Session.setDefault('currentPage', 0);
Meteor.autorun(function(){
	Meteor.subscribe('page', Session.get('currentPage'));
	Meteor.subscribe('myRequests', Meteor.user()._id);
});
Template.requests.request = function(){
	return Requests.find({});
};
Template.myProfile.findRequests = function(){
	return Requests.find({});
};