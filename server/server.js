Meteor.startup(function (){
	console.log(Requests.find().count() + " , " + Transactions.find().count());

	if( Requests.find().count() == 0 ){
		console.log('No Request History');
	}

	if( Transactions.find().count() == 0 ){
		console.log('No Transations History');
	}
});