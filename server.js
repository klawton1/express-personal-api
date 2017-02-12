// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/klawton1/express-personal-api/blob/master/README.md",
    baseUrl: "https://murmuring-depths-92485.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function(req, res){
  var kody = {
    name: "Kody Lawton",
    githubLink: "https://github.com/klawton1",
    githubImage: "https://avatars3.githubusercontent.com/u/23528010?v=3&s=460",
    personalSiteLink: "url",
    currentCity: "San Francisco",
    pets: "None :("
  }
  res.send(kody);
})

app.get('/api/trucks', function(req, res){
  db.Truck.find({}, function(err, trucks){
    if(err){console.log("ERROR!!", err);}
    console.log(trucks)
    res.json(trucks)
  })
})

app.get('/api/trucks/:id', function(req, res){
  var id = req.params.id;
  db.Truck.findOne({_id: id}, function(err, truck){
    if(err){console.log(err);}
    console.log("FOUND TRUCK BY ID -", id)
    res.json(truck);
  })
})

app.post('/api/trucks', function(req, res){
  var chef = req.body.headChef;
  var name = req.body.name;
  var image = req.body.image;
  var website = req.body.website;
  var truck = {
    headChef: headChef,
    name: name,
    website: website
  }
  db.Truck.create(truck, function(err, truck){
    if(err){console.log(err);}
    console.log("MADE NEW TRUCK -", truck.name);
    res.json(truck);
  })
})

app.put('/api/trucks/:id', function(req, res){
  var id = req.params.id;
  db.Truck.findOne({_id: id}, function(err, truck){
    truck.headChef = req.body.chef;
    truck.name = req.body.name;
    truck.website = req.body.website
    truck.save(function(err, truck){
      console.log("UPDATED TRUCK", truck.name)
      res.json(truck);
    })
  })
})

app.delete('/api/trucks/:id', function(req, res){
  var id = req.params.id;
  db.Truck.findOneAndRemove({_id: id}, function(err, truck){
    if(err){console.log(err);}
    console.log("REMOVED TRUCK");
    res.sendStatus(204);
  })
})


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
