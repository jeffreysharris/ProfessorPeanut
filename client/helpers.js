if (Meteor.isClient) {
	Template.dashboard.helpers({
		fullName: function(){
			return Meteor.user().profile.name.first + " " + Meteor.user().profile.name.last;
		}
	});
	Template.myProfile.helpers({
		firstName: function(){
			return Meteor.user().profile.name.first;
		},
		findRequests: function(){
			var myRequest = Meteor.subscribe('myRequest', Meteor.userId());
			var requests = Requests.find({requestorID : Meteor.userId()});
			return requests;
		},
		uniqueDonors: function( transactionIDs ){
			if(transactionIDs !== null){
				var donorSub = Meteor.subscribe('getDonors', transactionIDs);
					var donors = Meteor.users.find({ _id : { $in: transactionIDs }});
					console.log(donors.count);
					return donors;
			}else{
				return;
			}
		},
		uniqueRecipients: function( transactionIDs ){
			if(transactionIDs !== null){
				var recipientSub = Meteor.subscribe('getRecipients', transactionIDs);
					var recipients = Meteor.users.find({ _id : { $in: transactionIDs }});
					return recipients;
			}else{
				return;
			}
		}
	});
	Template.requests.helpers({
	// 	request: function(){
	// 		//Requests.remove({});
	// 		var page = Meteor.subscribe('page', Session.get('currentPage', 20));
	// 		var requests = Requests.find( { requestorID : { $not :  Meteor.userId()  } } );
	// 		//page.stop();
	// 		return requests;
	// 	},
		requestorName: function( requestorID ){
			var requestorSub = Meteor.subscribe('getUser', requestorID);
			if( requestorSub.ready() ){
				var requestor = Meteor.users.findOne({ _id : requestorID });
				return requestor.profile.name.first + " " + requestor.profile.name.last;
			}else{
				return "Loading...";
			}
		},
	// 	dateConvert: function(date){
	// 		if(typeof date !== null) {
	// 			var humaneDate = moment(date).format("dddd, MMMM Do YYYY, h:mm a");
	// 			//console.log(humaneDate);
	// 			return humaneDate;
	// 		} else return;
	// 	}
	});
	Template.thisRequestor.helpers({
		findRequests: function(thisRequestorID){
			var myRequest = Meteor.subscribe('myRequest', thisRequestorID);
			var requests = Requests.find({requestorID : thisRequestorID});
			//myRequest.stop();
			return requests;
		},
		uniqueDonors: function( transactionIDs ){
			if(transactionIDs !== null){
				var donorSub = Meteor.subscribe('getDonors', transactionIDs);
					var donors = Meteor.users.find({ _id : { $in: transactionIDs }});
					return donors;
			}else{
				return;
			}
		},
		uniqueRecipients: function( transactionIDs ){
			if(transactionIDs !== null){
				var recipientSub = Meteor.subscribe('getRecipients', transactionIDs);
					var recipients = Meteor.users.find({ _id : { $in: transactionIDs }});
					return recipients;
			}else{
				return;
			}
		}
	});
}