/**
 * Takes any minimongo collection and returns a random document in 
 * that collection. I'm not sure where to put this....
 * @param  {db.collection} collection [any minimongo collection]
 * @return {Object}            [a JSON formatted obect]
 */
getRandomDoc = function ( collection ){
	var rand = Math.floor( Math.random() * collection.find({}).count() );
	var result = collection.findOne( {}, { skip : rand } );
	return result;
};

if (Meteor.isClient) {
	 Meteor.startup(function () {
    // code to run on client at startup
  });
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
};