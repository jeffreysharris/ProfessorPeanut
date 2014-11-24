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
	startDate: {
		type: Date,
		label: "Starting Date"
	},
	endDate: {
		type: Date,
		label: "Ending Date"
	},
	currentFunding: {
		type: Number,
		decimal: true,
		label: "Current Funding",
		defaultValue: 0
	},
	targetFunding: {
		type: Number,
		decimal: true,
		label: "Funding Goal"
	},
	requestorID: {
		type: String,
		label: "Requestor"
	},
	transactionIDs: {
		type: [String],
		label: "Transactions",
		optional: true,
		defaultValue: []
	}
});

Requests.attachSchema(Schema.Request);
