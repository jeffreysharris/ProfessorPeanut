Requests = new Mongo.Collection("requests");

var Schema = {};
Schema.Request = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	description: {
		type: String,
		label: "Description",
		max: 1000
	},
	currentFunding: {
		type: Number,
		label: "Current Funding",
		defaultValue: 0
	},
	targetFunding: {
		type: Number,
		label: "Funding Goal"
	},
	requestorID: {
		type: String,
		label: "Requestor"
	},
	transactionIDs: {
		type: [String],
		label: "Transactions"
	}
});

Requests.attachSchema(Schema.Request);
