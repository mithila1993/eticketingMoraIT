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

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/getEvents',(req,res)=>{
    const typedName = req.body.name;
    const typedEmail = req.body.email;
    const typedPass = req.body.pass;

    admin.auth().createUser({
        displayName: typedName,
        email: typedEmail,
        password : typedPass,
      });
        // .then(function(userRecord) {
        //   // See the UserRecord reference doc for the contents of userRecord.
        //   console.log("Successfully created new user:", userRecord.uid);

        // })
        // .catch(function(error) {
        //   console.log("Error creating new user:", error);
        // });
        console.log(res)
    
    // var jsonClient = new FirebaseREST.JSONClient('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCsitGuoGQA-yDnLD38vb-awoUgzuy0i8c"');
    // jsonClient.post('/',{
    //         Events: {
    //           email: typedEmail,
    //           Password: typedPass,
    //           returnSecureToken: true
    //         },
            
    //       });
    // jsonClient.get('/')
    //       .then(res => console.log(res));
     });

     app.post('/createevents',(req,res)=>{
      const typedevent = req.body.event;
      const typeddescription = req.body.description;
      
  
      admin.database().ref().child('react/event').push({
            event: typedevent,
            description: typeddescription,
            
          })

          .then(function(userRecord) {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully event:", event.uid);
  
          })
          .catch(function(error) {
            console.log("Error creating event:", error);
          });
        });

        app.post('/recentevents',(req,res)=>{
          
      
          admin.database().ref('react/event').once("value", function(snapshot) {
            res.json({msg:true, data:snapshot.val()});
          }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
          });
        });

app.listen(3001,()=>{
    console.log('listening ')
})