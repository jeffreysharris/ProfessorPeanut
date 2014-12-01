Meteor.publish('page', function( currentPageCursor, limit ){
	return Requests.find({}, { limit : 20, skip : currentPageCursor });
});

Meteor.publish( 'myRequest', function( userId ){
	return Requests.find({ requestorID : userId });
});

//Publish one request based on ID, to enable syncing when selecting thisRequest and direct URL of requests
Meteor.publish('oneRequest', function( thisId){
	return Requests.find({ _id : thisId });
});

Meteor.publish( 'getUser', function( userId ){
	return Meteor.users.find({ _id : userId });
});

Meteor.publish( 'getDonors', function( userId ){
	return Transactions.find({ recipientID :  userId });
});

Meteor.publish( 'getRecipients', function( userId ){
	return Transactions.find({ donorID :  userId });
});
