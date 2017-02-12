var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
	twitter: String,
	facebook: String,
	website: String,
	phone: String
})

var truckSchema = new mongoose.Schema({
	name: String,
	headChef: {type: String},
	locations: {type: [String], default: "Check contacts for more info"},
	hours: {
		type:{
			monday: String,
			tuesday: String,
			wednesday: String,
			thursday: String,
			friday: String,
			saturday: String,
			sunday: String
		},
		default: "Check contacts for more info"
	},
	image: String,
	type: String,
	hasRestaurant: Boolean,
	contacts: [contactSchema]
});

var Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;