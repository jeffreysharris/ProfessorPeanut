Session.setDefault('currentPage', 0);
Meteor.autorun(function(){
	Meteor.subscribe('page', Session.get('currentPage'));
});
Template.requests.request = function(){
	return Requests.find({});
};