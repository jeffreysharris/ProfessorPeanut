var Schema = {};

Schema.Transaction = new SimpleSchema({
	id: {
		type: String
	}
});

Schema.Request = new SimpleSchema({
	id: {
		type: String
	}
});

Schema.User = new SimpleSchema({
	completedTransactions: {
		type: [Object]
	},
	"completedTransactions.$.Receipts": {
		type: [String]
	},
	"completedTransactions.$.Donations": {
		type: [String]
	},
	postedRequests: {
		type: [String]
	},
	name: {
		type: [Object]
	},
	"name.$.first": {
		type: String,
		regEx: /^[a-zA-Z-]{2,25}$/,
		optional: false
	},
	"name.$.last": {
		type: String,
		regEx: /^[a-zA-Z-]{2,25}$/,
		optional: false
	},
	balance: {
		type: Number,
		label: "Account balance, donations vs. receipts"
	},
	address: {
		type: String
	},
	description: {
		type: String,
		optional: true
	},
	dateRegistered: {
		type: Date
	},
	password: {
		type: String
	},
	username: {
		type: String,
	},
	id: {
		type: String
	},
});

Meteor.users.attachSchema(Schema.User);