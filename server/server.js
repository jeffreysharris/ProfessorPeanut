Meteor.publish('page', function( currentPageCursor, limit ){
	return Requests.find({}, { limit : limit, skip : currentPageCursor });
});

Meteor.publish( 'myRequest', function( userId ){
	return Requests.find({ requestorID : userId });
});