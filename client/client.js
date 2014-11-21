Meteor.startup(function (){
	
});

var getRandomUserID = function (){
	var rand = Math.random();
	var result = Meteor.users.findOne( { "profile.random" : { $gte : rand } } );
	if ( result === null ) {
	   	result = Meteor.users.findOne( { "profile.random" : { $lte : rand } } );
	}
	return result._id;
};

var getRandomRequestID = function (){
	var rand = Math.random();
	var result = Requests.findOne( { random : { $gte : rand } } );
	if ( result === null ) {
	   	result = Requests.findOne( { random : { $lte : rand } } );
	}
	return result._id;
};
/*
var runTransactions = function( numTransactions ){
	for( var i = 0; i < numTransactions; i++){
		request = getRandomRequestID
	}
};
*/