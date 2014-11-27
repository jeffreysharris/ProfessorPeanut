/*----- IRON ROUTING \m/ -----*/
Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {
		path: '/',
	});
	this.route('register');
	this.route('submitRequest');
	this.route('thisRequestor', {
		path: ':requestorID',
		waitOn: function(){
			return Meteor.subscribe('getUser', this.params.requestorID);
		},
		data: function(){
			return Meteor.users.findOne(this.params.requestorID);
		}
	});
	this.route('thisRequest', {
		path: ':requestorID/:_id',
		waitOn: function(){
			return [Meteor.subscribe('oneRequest', this.params._id),
				Meteor.subscribe('getUser', this.params.requestorID)];
		},
		data: function(){
			//console.warn(this.params.requestorID);
			var  request  = Requests.findOne(this.params._id);

			//console.warn(request);
			return {request  : Requests.findOne(this.params._id), 
				requestor : Meteor.users.findOne(this.params.requestorID)}; 
		}
	});
	this.route('donate');
});