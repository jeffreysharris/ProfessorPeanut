var getRandomUserID = function (){
	var rand = Math.random();
	var result = Meteor.users.findOne( { "profile.random" : { $gte : rand } } );
	if ( result === null ) {
	   	result = Meteor.users.findOne( { "profile.random" : { $lte : rand } } );
	}
	return result._id;
};

var populateNullRequests = function (){
	//if there are any requests with null requestorIDs, pull a random user and assign them to the request.
	if(Requests.find({ requestorID : null}).count() === 0 ){
		console.log("No unpaired requests in meteor.reqests!");
	}else{
		console.log("Attaching " + Requests.find({ requestorID : null}).count() + "new requests to users from Meteor.users");
	 	Requests.update(
	 		{requestorID : null},
	 		{$set: { requestorID : getRandomUserID() }},
	 		{ validationContext: "updateForm",
	 		  multi: true },
	 		function(error, result){
				//console.log(error);
				//console.log(result);
	 		});
	 }
};

Meteor.startup(function (){

	if( Meteor.users.find().count() === 0 )
		console.log('No Users, use : \n mongoimport --db meteor --collection users --file public/seed_users.json --dbpath .meteor/local/db --jsonArray');

	if( Requests.find().count() === 0 )
		console.log('No Request History, use : \n mongoimport --db meteor --collection requests --file public/seed_requests.json --dbpath .meteor/local/db --jsonArray');

	if( Transactions.find().count() === 0 )
		console.log('Transations History Empty');

	populateNullRequests();
});
