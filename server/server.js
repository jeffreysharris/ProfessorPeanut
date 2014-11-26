Meteor.publish('page', function( currentPageCursor, limit ){
	return Requests.find({}, { limit : 20, skip : currentPageCursor });
});

Meteor.publish( 'myRequest', function( userId ){
	return Requests.find({ requestorID : userId });
});

//Create publish to return profile based on  userID
//Meteor.publish('getUser')
Meteor.publish( 'getUser', function( userId ){
	return Meteor.users.findOne({ _id : userId }).profile;
});