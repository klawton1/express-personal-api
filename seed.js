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
		headChef: "murican",
		name: "Jimmy's John",
		locations: ["north","east","west"],
		rating: 1
	},
	{
		headChef: "thai",
		name: "dem noodles",
		locations: ["south","The Mission","Downtown"],
		rating: 3
	},
	{
		headChef: "Akash Kapoor",
		name: "Curry Up Now",
		locations: ["225 Bush St","GFoodLounge (SoMa)","SPARK (Mission Bay)", "SPARK (Mission Bay)"],
		rating: 5,
		website: "http://www.curryupnow.com/#trucks-section",
		hours: {
			monday: "11:00am - 2:00pm",
			tuesday: "11:00am - 2:00pm",
			wednesday: "11:00am - 2:00pm",
			thursday: "11:00am - 2:00pm",
			friday: "11:00am - 2:00pm",
			saturday: "11:00am - 2:00pm",
			sunday: "11:00am - 2:00pm"
		},
		image: "https://static1.squarespace.com/static/54090308e4b0ba22079ce4dd/540e8000e4b0424a8141b7ab/57880d7303596e546c9f8a2c/1468534137478/20110531-_MG_2181.jpg?format=1500w"
	},
	{
		headChef: "comfort",
		name: "333 Truck",
		rating: 7,
		website: "http://www.333truck.com/"
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
		rating: 8.5,
		image: "https://static1.squarespace.com/static/556f7852e4b03651f86fdd24/t/559e98d9e4b01ced206f3452/1436457271158/ChairmanSFTruck.jpg?format=300w"
	},
];

db.Truck.remove(function(err, response){
	if(err){console.log(err)}
	console.log("deleting", response);
	db.Truck.create(foodTrucks, function(err, trucks){
		if(err){console.log("ERROR IN SEED!!", err)}
		console.log("creating", trucks);
		process.exit();
	})
})


