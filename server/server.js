Meteor.publish('page', function( currentPagCursor ){
	return Requests.find({}, { limit : 20, skip : currentPagCursor });
})