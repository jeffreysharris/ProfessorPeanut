//start at first page of collection
Session.setDefault('currentPage', 0);

//subscribes to record set of requests published by server as 'page'
UI.registerHelper('request', function(){
	var page = Meteor.subscribe('page', Session.get('currentPage', 20));
	var requests = Requests.find( { requestorID : { $not :  Meteor.userId()  } } );
	return requests;
});

//for a given requestorID, returns name of requestor
//modify to return object of info about user for requestor profile
UI.registerHelper('requestor', function(requestorID){
	if(typeof requestorID !== null){
		var user = Meteor.users.findOne({"_id": requestorID});
		if(typeof user !== null){
			var name = user.profile.name.first + " " +user.profile.name.last;
			return name;
		} else return;
	} else return;
});

//converts date into a human-friendly format for display
UI.registerHelper('dateConvert', function(date){
	if(typeof date !== null) {
		var humaneDate = moment(date).format("dddd, MMMM Do YYYY, h:mm a");
		//console.log(humaneDate);
		return humaneDate;
	} else return;
});

//returns name of requestor, based on requestorID
UI.registerHelper('requestorName', function( requestorID ){
	var requestorSub = Meteor.subscribe('getUser', requestorID);
	if( requestorSub.ready() ){
		var requestor = Meteor.users.findOne({ _id : requestorID });
		return requestor.profile.name.first + " " + requestor.profile.name.last;
	}else{
		return "Loading...";
	}
});