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
	this.route('thisRequest');
});