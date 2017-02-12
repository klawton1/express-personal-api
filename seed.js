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

var delPopo = {
	twitter:"https://twitter.com/pizzadelpopolo",
	facebook: "https://www.facebook.com/pizzadelpopolo",
	website: "http://www.delpopolosf.com/",
	phone: "415.589.7940"
}

var tonayense = {
	website: "http://tonayense.com/",
	phone: "415.559.5713"
}

var curry = {
	twitter:"https://twitter.com/CurryUpNow",
	facebook: "https://www.facebook.com/curryupnow",
	website: "http://www.curryupnow.com/",
	phone: "650.489.7850"
}

var truck333 = {
	twitter:"https://twitter.com/333Truck",
	website: "http://www.333truck.com/",
}

var chairman = {
	twitter:"https://twitter.com/chairmantruck",
	facebook: "https://www.facebook.com/TheChairmanTruck",
	website: "http://www.hailthechairman.com/",
	phone: "415.813.8800"
}

var mogo = {
	twitter: "https://twitter.com/MoGoBBQ",
	facebook: "https://www.facebook.com/MoGoBBQ/",
	website: "http://www.mogobbq.com/",

}

var koja = {
	twitter: "https://twitter.com/KoJaTruckStops",
	facebook: "https://www.facebook.com/KoJaKitchen",
	website: "http://www.kojakitchen.com/",
	phone: "415.463.5085"
}

var foodTrucks = [
	{
		name: "Del Popolo",
		locations: ["855 Bush St."],
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
		type: "Italian",
		hasRestaurant: true,
		contacts: delPopo

	},
	{
		name: "El Tonayense",
		locations: ["Harrison St & 14th St","Harrison St & 17th St ","Harrison St & 19th St "],
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
		hasRestaurant: false,
		contacts: tonayense



	},
	{
		headChef: "Akash Kapoor",
		name: "Curry Up Now",
		locations: ["225 Bush St","GFoodLounge (SoMa)","SPARK (Mission Bay)", "SPARK (Mission Bay)"],
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
		hasRestaurant: true,
		contacts: curry
	},
	{
		name: "333 Truck",
		image: "https://static1.squarespace.com/static/56cf7df11bbee0d2dcf915a4/56e0a1dd40261d3ec5402693/56e0a20959827e35364e395a/1457562159317/IMG_1506.png?format=1500w",
		type: "Mexican, Korean, and Indian",
		hasRestaurant: false,
		contacts: truck333
	},
	{
		headChef: "Hiroo Nagahara",
		name: "The Chairman",
		locations: ["670 Larkin Street"],
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
		hasRestaurant: false,
		contacts: chairman
	},
	{
		name: "Mogo BBQ",
		image: "http://media-cache-ak0.pinimg.com/736x/a0/0f/d2/a00fd2f04f23fa2484aa4f7e2ba5a7c9.jpg",
		type: "Korean-Mexican Fusion",
		hasRestaurant: false,
		contacts: mogo

	},
	{
		name: "Koja Kitchen",
		image: "http://uploads.webflow.com/5589eda48397dc760e2bdcff/55beabe1ae9f367742ed1f26_TruckImageHeadPic.jpg",
		type: "Korean-Japanese",
		locations: ["343 Clement Street"],
		hasRestaurant: true,
		contacts: koja
	}
];

db.Truck.remove(function(err, response){
	if(err){console.log(err)}
	db.Truck.create(foodTrucks, function(err, trucks){
		if(err){console.log("ERROR IN SEED!!", err)}
		console.log("SEEDED");
		process.exit();
	})
})


