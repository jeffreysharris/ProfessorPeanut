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
		type: [String],
		defaultValue: [""]
	},
	"completedTransactions.$.Donations": {
		type: [String],
		defaultValue: [""]
	},
	postedRequests: {
		type: [String],
		defaultValue: [""]
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
		label: "Account balance, donations vs. receipts",
		defaultValue: 0
	},
	address: {
		type: String,
		optional: false
	},
	description: {
		type: String,
		optional: true
	},
	dateRegistered: {
		type: Date,
		autoValue: (new Date()).toJSON()
	},
	password: {
		type: String,
		optional: false
	},
	username: {
		type: String,
		optional: false
	},
	id: {
		type: String
	},
});

Meteor.users.attachSchema(Schema.User);