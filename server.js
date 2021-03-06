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
    woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/klawton1/express-personal-api/blob/master/README.md",
    baseUrl: "https://murmuring-depths-92485.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about the developer"},
      {method: "GET", path: "/api/trucks", description: "Get data about food trucks"},
      {method: "GET", path: "/api/trucks/:id", description: "Find a food truck by id"},
      {method: "GET", path: "/api/trucks/:id/contacts", description: "get contact info for a specific truck"},
      {method: "POST", path: "/api/trucks", description: "Create a new food truck item"},
      {method: "PUT", path: "/api/trucks/:id", description: "Update a food truck's information"},
      {method: "DELETE", path: "/api/trucks", description: "Delete a food truck from the database"},
    ]
  })
});

app.get('/api/profile', function(req, res){
  var kody = {
    name: "Kody Lawton",
    githubLink: "https://github.com/klawton1",
    githubImage: "https://avatars3.githubusercontent.com/u/23528010?v=3&s=460",
    personalSiteLink: "https://klawton1.github.io/",
    currentCity: "San Francisco"
  }
  res.send(kody);
})

app.get('/api/trucks', function(req, res){
  db.Truck.find({}, function(err, trucks){
    if(err){console.log(err);}
    if(req.query.limit === undefined){
      res.json(trucks);
    }else{
      var limit = Number(req.query.limit);
      var trucks = trucks.slice(0, limit);
      res.json(trucks)
    }
  })
})

app.get('/api/trucks/:id', function(req, res){
  var id = req.params.id;
  db.Truck.findOne({_id: id}, function(err, truck){
    if(err){console.log(err);}
    res.json(truck);
  })
})

app.post('/api/trucks', function(req, res){
  var body = req.body;
  var truck = {}
  for(key in body){
    if(body[key]){
      if(key === "locations"){
        truck[key] = body[key];
      }
      truck[key] = body[key];
    }
  }
  db.Truck.create(truck, function(err, truck){
    if(err){console.log(err);}
    res.send(truck);
  })
})

app.put('/api/trucks/:id', function(req, res){
  var id = req.params.id;
  db.Truck.findOne({_id: id}, function(err, truck){
    var body = req.body;
    for(key in body){
      if(body[key]){
        if(key === "contacts"){
          for(contact in body.contacts){
            truck.contacts[contact] = body.contacts[contact];
          }
        }
        else{
        truck[key] = body[key];
        }
      }
    }
    truck.save(function(err, truck){
      res.json(truck);
    })
  })
})

app.delete('/api/trucks/:id', function(req, res){
  var id = req.params.id;
  db.Truck.findOneAndRemove({_id: id}, function(err, truck){
    if(err){console.log(err);}
    res.sendStatus(204);
  })
})

app.get('/api/trucks/:id/contacts', function(req, res){
  var id = req.params.id;
  db.Truck.findOne({_id: id}, function(err, truck){
    res.json(truck.contacts)
  })
})

// app.put('/api/trucks/:id/contacts')


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
