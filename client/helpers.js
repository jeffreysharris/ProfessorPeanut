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
		uniqueDonors: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var donorSub = Meteor.subscribe( 'getDonors', userId );
				var donors = Transactions.find({ recipientID :  userId });
				donors.forEach(function(donor){
					var push = true;
					for (var i = 0; i < uniqueIDs.length; i++) {
						if( uniqueIDs[i] === donor.donorID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(donor.donorID);
					}
				})
				Session.set('headCount', uniqueIDs.length);
				return uniqueIDs;
			}else{
				return;
			}
		},
		uniqueRecipients: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var recipientsub = Meteor.subscribe( 'getRecipients', userId );
				var recipients = Transactions.find({ donorID :  userId }).fetch();
				//console.log(recipients);
				recipients.forEach(function(recipient){
					var push = true;
					for (var i = 0; i <= uniqueIDs.length; i++) {
						if( uniqueIDs[i] === recipient.recipientID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(recipient.recipientID);
					}
				})
				console.log(uniqueIDs);
				Session.set('headCount', uniqueIDs.length);
				return uniqueIDs;
			}else{
				return;
			}
		},
		uniqueDonorCount: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var donorSub = Meteor.subscribe( 'getDonors', userId );
				var donors = Transactions.find({ recipientID :  userId });
				donors.forEach(function(donor){
					var push = true;
					for (var i = 0; i < uniqueIDs.length; i++) {
						if( uniqueIDs[i] === donor.donorID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(donor.donorID);
					}
				})
				return uniqueIDs.length;
			}else{
				return;
			}
		},
		uniqueRecipientCount: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var recipientsub = Meteor.subscribe( 'getRecipients', userId );
				var recipients = Transactions.find({ donorID :  userId }).fetch();
				//console.log(recipients);
				recipients.forEach(function(recipient){
					var push = true;
					for (var i = 0; i <= uniqueIDs.length; i++) {
						if( uniqueIDs[i] === recipient.recipientID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(recipient.recipientID);
					}
				})
				console.log(uniqueIDs);
				return uniqueIDs.length;
			}else{
				return;
			}
		},


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
		uniqueDonors: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var donorSub = Meteor.subscribe( 'getDonors', userId );
				var donors = Transactions.find({ recipientID :  userId });
				donors.forEach(function(donor){
					var push = true;
					for (var i = 0; i < uniqueIDs.length; i++) {
						if( uniqueIDs[i] === donor.donorID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(donor.donorID);
					}
				})
				Session.set('headCount', uniqueIDs.length);
				return uniqueIDs;
			}else{
				return;
			}
		},
		uniqueRecipients: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var recipientsub = Meteor.subscribe( 'getRecipients', userId );
				var recipients = Transactions.find({ donorID :  userId }).fetch();
				console.log(recipients);
				recipients.forEach(function(recipient){
					var push = true;
					for (var i = 0; i < uniqueIDs.length; i++) {
						if( uniqueIDs[i] === recipient.recipientID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(recipient.recipientID);
					}
				})
				Session.set('headCount', uniqueIDs.length);
				return uniqueIDs;
			}else{
				return;
			}
		},
		uniqueDonorCount: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var donorSub = Meteor.subscribe( 'getDonors', userId );
				var donors = Transactions.find({ recipientID :  userId });
				donors.forEach(function(donor){
					var push = true;
					for (var i = 0; i < uniqueIDs.length; i++) {
						if( uniqueIDs[i] === donor.donorID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(donor.donorID);
					}
				})
				return uniqueIDs.length;
			}else{
				return;
			}
		},
		uniqueRecipientCount: function( userId ){
			var uniqueIDs = [];
			if(userId !== null){
				var recipientsub = Meteor.subscribe( 'getRecipients', userId );
				var recipients = Transactions.find({ donorID :  userId }).fetch();
				//console.log(recipients);
				recipients.forEach(function(recipient){
					var push = true;
					for (var i = 0; i <= uniqueIDs.length; i++) {
						if( uniqueIDs[i] === recipient.recipientID ){
							push = false;
						}
					}
					if( push ){
						uniqueIDs.push(recipient.recipientID);
					}
				})
				console.log(uniqueIDs);
				return uniqueIDs.length;
			}else{
				return;
			}
		},

	});
}