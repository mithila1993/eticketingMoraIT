const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;
var admin = require("firebase-admin");
const FirebaseREST = require('firebase-rest').default;
const firebase = require('firebase');

var serviceAccount = require("./react-note-a8f4e-firebase-adminsdk-gki6z-359cf18199.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-note-a8f4e.firebaseio.com"
});



var client = new Client();

const server = express();
server.use(cors());

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json());

var userSystem = admin.database().ref('react/users');


//Create User
server.post('/createUser',(req,res)=>{
  

  admin.auth().createUser({
      displayName: req.body.name,
      email: req.body.email,
      password : req.body.pass,
    });

  admin.database().ref("react/users").push({
      displayName: req.body.name,
      email: req.body.email,
      role: req.body.role
        });

    console.log(res);
   });

//Recent Events
server.get('/recentevents',(req,res)=>{
    
    
    admin.database().ref('react/event').once("value", function(snapshot) {
      res.json({data:snapshot.val()});
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  });

//Choose user 
server.post('/chooseUser',(req,res)=>{
    userSystem.orderByChild("email").equalTo(req.body.email).once("child_added", function(snapshot) {
      // res.json({msg:true, data:snapshot.val().role});
      res.send(snapshot.val().role);
      
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  });

//Add Locations
server.post('/addLocations',(req,res)=>{
  
  
  admin.database().ref().child('react/admin/locations').push({
        name: req.body.location,   
      })

      .then(function(userRecord) {
        
        console.log("Successfully event:", event.uid);

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Display Event Details
server.post('/displayEventDetails',(req,res)=>{
  var nimal = req.body.eventId;
  
  admin.database().ref('react/event').child(nimal).once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});




//Hello World
server.get('/hello', (req, res) => res.send('Hello World!'));

server.post('/mello', function(req, res) {
  var user_id = req.body.id;
  var token = req.body.token;
  var geo = req.body.geo;

  res.send(user_id + ' ' + token + ' ' + geo);
});

//Create Events
server.post('/createevents',(req,res)=>{
      
  admin.database().ref().child('react/event').push({
      description : req.body.description,
      category : req.body.category,
      name : req.body.name,
      image : req.body.image
      })

      .then(function(userRecord) {
        
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Display Events when creates the event
    server.post('/displayEventsOrganizer',(req,res)=>{
      
      admin.database().ref('react/event').once("value", function(snapshot) {
        res.json({data:snapshot.val()});
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    });

//Create Shows
server.post('/createShows',(req,res)=>{
  var eventid = req.body.eventid
  
admin.database().ref().child('react/event/' + eventid + '/shows').push({
  venue : req.body.venue,
  district : req.body. district,
  hall : req.body.hall,
  starttime : req.body.starttime,
  endtime : req.body.endtime,

  })

  .then(function(userRecord) {
    
    

  })
  .catch(function(error) {
    console.log("Error creating event:", error);
  });
});

//Display Events when creates the show
server.post('/displayShowsOrganizer',(req,res)=>{
  var eventid = req.body.eventid
  admin.database().ref().child('react/event/' + eventid + '/shows').once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});


//Add foods
server.post('/addFoods',(req,res)=>{
  var eventid = req.body.eventid;
  var showid = req.body.showid
  console.log(eventid);
  console.log(showid);
  
admin.database().ref('react/event/' + eventid + '/shows/'+ showid).child('/foods/').set({
  name : req.body.name,
  description : req.body.description,
  category : req.body.category,
  price : req.body.price,
  })

  .then(function(userRecord) {
    
    

  })
  .catch(function(error) {
    console.log("Error creating event:", error);
  });
});

//Add Seats
server.post('/addSeats',(req,res)=>{
  var seats = req.body.seats;
  var eventid = req.body.eventid;
  var showid = req.body.showid
  
admin.database().ref('react/event/' + eventid + '/shows/'+ showid).child('/seats/').set(seats)

  .then(function(userRecord) {
    
    

  })
  .catch(function(error) {
    console.log("Error creating event:", error);
  });
});

server.listen(3002, () => console.log('Example app listening on port 3001!'));