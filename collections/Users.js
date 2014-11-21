var Schema = {};

Schema.UserProfile = new SimpleSchema({
	name: {
		type: Object,
		optional: true
	},
		"name.first": {
			type: String,
			regEx: /^[a-zA-Z-]{2,25}$/,
		},
		"name.last": {
			type: String,
			regEx: /^[a-zA-Z-]{2,25}$/,
		},
	address: {
		type: [Object],
		optional: true
	},
		"address.$.houseNumber": {
			type: Number
		},
		"address.$.street": {
			type: String
		},
		"address.$.city": {
			type: String
		},
		"address.$.state": {
			type: String
		},
		"address.$.zip": {
			type: Number
		},
	description: {
		type: String,
		defaultValue: "",
		optional: true
	},
	completedTransactions: {
		type: Object,
		optional: true
	},
		"completedTransactions.receipts": {
			type: [String],
			defaultValue: []
		},
		"completedTransactions.donations": {
			type: [String],
			defaultValue: []
		},
	postedRequests: {
		type: [String],
		defaultValue: [],
		optional: true
	},
	balance: {
		type: Number,
		label: "Account balance, donations vs. receipts",
		defaultValue: 0,
		optional: true
	},
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

<<<<<<< HEAD:collections/Users.js
=======
//Not sure if this totally correct. It seems like it will overwrite any collection that currently exists,
//but I'm not yet sure of how to access already-existing collections.
var Requests = new Mongo.Collection("requests");
var Transactions = new Mongo.Collection("transactions");

>>>>>>> 4ae5b63da9dbf9283ad57a3ee25add95d5175059:lib/common.js
Meteor.users.attachSchema(Schema.User);
