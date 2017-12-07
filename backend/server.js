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
      password : req.body.pass,
      role: req.body.role
        });

    console.log(res);
   });

//Recent Events
server.post('/recentevents',(req,res)=>{
    
    
    admin.database().ref('react/event').once("value", function(snapshot) {
      res.json({msg:true, data:snapshot.val()});
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  });

//Choose user 
server.post('/chooseUser',(req,res)=>{
    console.log(req.body.email);
    console.log('rec');
    admin.database().ref('react/users').orderByChild("email").equalTo(req.body.email).once("child_added", function(snapshot) {
      // res.json({msg:true, data:snapshot.val().role});
      res.send(snapshot.val().role);
      
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
  const typedevent = req.body.event;
  const typeddescription = req.body.description;
  
  admin.database().ref().child('react/event').push({
        event: typedevent,
        description: typeddescription,       
      })

      .then(function(userRecord) {
        
        console.log("Successfully event:", event.uid);

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

server.listen(3002, () => console.log('Example app listening on port 3001!'));