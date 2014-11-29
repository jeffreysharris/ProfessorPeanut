if (Meteor.isClient) {
	var donated = {
		has_donated : false,
		amt : 0
	};
	var donatedDep = new Deps.Dependency;
	Template.donate.helpers({ 
		donatedDep : function(){
			donatedDep.depend();
			// var donated = Session.get('donated');
			return donated;
		}
	});
	Template.donate.events({
		//donate button calls doTransaction method
		'submit form' : function(e, template){
			e.preventDefault();
			var args = {
				donorID : Meteor.user()._id,
				requestID : this.request._id,
				amount : parseFloat(template.find('#donation_amount').value)
			};
			// console.warn('donorID is '+donorID);
			// console.warn('requestID is '+requestID);
			// console.warn('amount is '+amount);
			Meteor.call('doTransaction', args, function(e, result){
				if(e) {
					console.warn(e);
				} else {
					donated.has_donated = true;
					donated.amt = args.amount;
					donatedDep.changed();
					// console.warn(result);
					// Session.set('donated', {
					// 	has_donated : true,
					// 	amt : args.amount
					// });
				}
			});
		}
	});
	Template.donate.destroyed = function(){
		donated.has_donated = false;
		donated.amt = 0;
		donatedDep.changed();
	};
}