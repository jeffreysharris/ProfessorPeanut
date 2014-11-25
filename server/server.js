Meteor.publish('page', function( currentPageCursor ){
	return Requests.find({}, { limit : 20, skip : currentPageCursor });
});

Meteor.publish( 'myRequest', function( userId ){
	return Requests.find({ requestorID : userId });
});