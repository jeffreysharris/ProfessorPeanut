Transactions = new Mongo.Collection("transactions");

var Schema = {};
Schema.Transaction = new SimpleSchema({
	amount: {
		type: Number,
		label: "Amount"
	},
	donorID: {
		type: String,
		label: "Donor"
	},
	recipientID: {
		type: String,
		label: "Recipient"
	},
	requestID: {
		type: String,
		label: "Request"
	},
});

Transactions.attachSchema(Schema.Transactions);
