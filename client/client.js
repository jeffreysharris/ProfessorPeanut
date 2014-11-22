getRandomDoc = function ( collection ){
	var rand = Math.floor( Math.random() * collection.find({}).count() );
	var result = collection.findOne( {}, { skip : rand } );
	return result;
};

var runTransaction = function(){
		return request = getRandomRequest;
};
