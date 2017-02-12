// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var foodTrucks = [
	{
		name: "Del Popolo",
		locations: ["855 Bush St."],
		website: "http://www.delpopolosf.com/",
		hours: {
			monday: "Closed",
			tuesday: "9:00am - 10:00pm",
			wednesday: "5:30pm - 10pm",
			thursday: "5:30pm - 10pm",
			friday: "5:30pm - 11pm",
			saturday: "5:30pm - 11pm",
			sunday: "5:30pm - 10pm"
		},
		image: "https://cdn.psfk.com/wp-content/uploads/2012/07/Del_Popolo_3.jpg",
		type: "Pizza",
		hasRestaurant: true

	},
	{
		name: "El Tonayense",
		locations: ["Harrison St & 14th St","Harrison St & 17th St ","Harrison St & 19th St "],
		website: "http://tonayense.com/",
		hours: {
			monday: "9:00am - 5:00pm",
			tuesday: "9:00am - 10:00pm",
			wednesday: "9:00am - 5:00pm",
			thursday: "9:00am - 5:00pm",
			friday: "9:00am - 5:00pm",
			saturday: "9:00am - 5:00pm",
			sunday: "9:00am - 5:00pm"
		},
		image: "http://farm6.staticflickr.com/5474/11046115013_bf2ea0389e.jpg",
		type: "Mexican",
		hasRestaurant: false



	},
	{
		headChef: "Akash Kapoor",
		name: "Curry Up Now",
		locations: ["225 Bush St","GFoodLounge (SoMa)","SPARK (Mission Bay)", "SPARK (Mission Bay)"],
		website: "http://www.curryupnow.com/#trucks-section",
		hours: {
			monday: "11:00am - 2:00pm",
			tuesday: "11:00am - 2:00pm",
			wednesday: "11:00am - 2:00pm",
			thursday: "11:00am - 2:00pm",
			friday: "11:00am - 2:00pm",
			saturday: "Closed",
			sunday: "11:00am - 2:00pm"
		},
		image: "https://static1.squarespace.com/static/54090308e4b0ba22079ce4dd/540e8000e4b0424a8141b7ab/57880d7303596e546c9f8a2c/1468534137478/20110531-_MG_2181.jpg?format=1500w",
		type: "Indian",
		hasRestaurant: true
	},
	{
		name: "333 Truck",
		website: "http://www.333truck.com/",
		image: "https://static1.squarespace.com/static/56cf7df11bbee0d2dcf915a4/56e0a1dd40261d3ec5402693/56e0a20959827e35364e395a/1457562159317/IMG_1506.png?format=1500w",
		type: "Mexican, Korean, and Indian",
		hasRestaurant: false
	},
	{
		headChef: "Hiroo Nagahara",
		name: "The Chairman",
		locations: ["670 Larkin Street"],
		website: "http://www.hailthechairman.com/",
		hours: {
			monday: "11:30am - 9:00pm",
			tuesday: "11:30am - 9:00pm",
			wednesday: "11:30am - 9:00pm",
			thursday: "11:30am - 9:00pm",
			friday: "11:30am - 9:00pm",
			saturday: "11:30am - 9:00pm",
			sunday: "11:30am - 7:00pm"
		},
		image: "https://static1.squarespace.com/static/556f7852e4b03651f86fdd24/t/559e98d9e4b01ced206f3452/1436457271158/ChairmanSFTruck.jpg?format=300w",
		type: "Taiwanese",
		hasRestaurant: false
	},
];

db.Truck.remove(function(err, response){
	if(err){console.log(err)}
	db.Truck.create(foodTrucks, function(err, trucks){
		if(err){console.log("ERROR IN SEED!!", err)}
		console.log("SEEDED");
		process.exit();
	})
})


