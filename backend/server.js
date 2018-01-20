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
  console.log(req.body.role);
  console.log('added');

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

    res.send('POST request'); 
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
  var nimal = req.body.eventid;
  
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
        res.send('POST Method');
        

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
  time : req.body.time,
  seats : req.body.seats,
  carparkingid : req.body.carparkingid,
  shopid : req.body.shopid,
  
  

  })

  .then(function(userRecord) {
    
    res.send('hello world');

  })
  .catch(function(error) {
    console.log("Error creating event:", error);
  });
});

//Display Shows when creates the Event, click the Event
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
  
  admin.database().ref('react/event/' + eventid + '/shows/'+ showid).child('/foods/').push({
  name : req.body.name,
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

//Create Order with event details
server.post('/addOrder',(req,res)=>{
  var eventid = req.body.eventid;
  var showid = req.body.showid
  console.log(eventid);
  console.log(showid);
  
  admin.database().ref('react').child('orders').push({
  name : req.body.name,
  showid : req.body.showid,
  eventid : req.body.eventid,
  }).then((snap) => {
    
    res.json(snap.key);
 })

  .then(function(userRecord) {
    
    

  })
  .catch(function(error) {
    console.log("Error creating event:", error);
  });
});

//Display Seats Allocation
server.post('/displaySeatAllocation',(req,res)=>{
  var eventid = req.body.eventid;
  var showid = req.body.showid
  admin.database().ref().child('react/event/' + eventid + '/shows/'+ showid +'/seats').once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Reserve Seats
server.post('/reserveSeats',(req,res)=>{
  var seats = req.body.seats;
  var orderid = req.body.orderid;
  
  admin.database().ref('react/orders/'+orderid).child('/seats/').set(seats)

  .then(function(userRecord) {
    
    

  })
  .catch(function(error) {
    console.log("Error creating event:", error);
  });
});

//Display food items to user
server.post('/displayFoodsUser',(req,res)=>{
  var eventid = req.body.eventid;
  var showid = req.body.showid;
  admin.database().ref().child('react/event/' + eventid + '/shows/' + showid + '/foods').once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Add Foods by user
server.post('/addFoodsUser',(req,res)=>{
  var orderid = req.body.orderid;
  
  admin.database().ref('react/orders/' + orderid).child('/foods/').push(
  {
  foodid : req.body.foodid,
  })

  .then(function(userRecord) {
    
    

  })
  .catch(function(error) {
    console.log("Error creating event:", error);
  });
});

//Display Order Details
server.post('/displayOrderUser',(req,res)=>{
  var orderid = req.body.orderid;
  admin.database().ref().child('react/orders/' + orderid).once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Display Recent Event Organizers on Admin Panel
server.post('/recentEventOrganizersOnAdmin',(req,res)=>{
    
    
  admin.database().ref('react/users').orderByChild("role").equalTo("EventOrganizerUnapprove").once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Approve Recent Event Organizers

server.post('/recentEventOrganizersApprove',(req,res)=>{
  
  
  admin.database().ref().child('react/users/'+req.body.value + '/role').set('EventOrganizerApprove')

      .then(function(userRecord) {
        
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Delete Recent Event Organizers

server.post('/recentEventOrganizersDelete',(req,res)=>{
  
  
  admin.database().ref().child('react/users/'+req.body.value + '/role').set('EventOrganizerDelete')

      .then(function(userRecord) {
        
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Display Approve Event Organizers on Admin Panel
server.post('/approveEventOrganizersOnAdmin',(req,res)=>{
    
    
  admin.database().ref('react/users').orderByChild("role").equalTo("EventOrganizerApprove").once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Display Delete Event Organizers on Admin Panel
server.post('/deleteEventOrganizersOnAdmin',(req,res)=>{
    
    
  admin.database().ref('react/users').orderByChild("role").equalTo("EventOrganizerDelete").once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});


//Display Recent Car Parking Owners on Admin Panel
server.post('/RecentcarparkownersOnAdmin',(req,res)=>{
    
    
  admin.database().ref('react/users').orderByChild("role").equalTo("CarParkOwnerUnapprove").once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Approve Recent Car Parking Owners

server.post('/RecentcarparkownersApprove',(req,res)=>{
  
  
  admin.database().ref().child('react/users/'+req.body.value + '/role').set('CarParkOwnerApprove')

      .then(function(userRecord) {
        
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Delete Recent Car Parking Owners

server.post('/RecentcarparkownersDelete',(req,res)=>{
  
  
  admin.database().ref().child('react/users/'+req.body.value + '/role').set('CarParkOwnerDelete')

      .then(function(userRecord) {
        
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Display Recent Shop Owners on Admin Panel
server.post('/RecentshopownersOnAdmin',(req,res)=>{
    
  console.log('Hello');  
  admin.database().ref('react/users').orderByChild("role").equalTo("ShopOwnerUnapprove").once("value", function(snapshot) {
    res.json({data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Approve Recent Shop Owners

server.post('/RecentshopownersApprove',(req,res)=>{
  
  
  admin.database().ref().child('react/users/'+req.body.value + '/role').set('ShopOwnerApprove')

      .then(function(userRecord) {
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Delete Recent Shop Owners

server.post('/RecentshopownersDelete',(req,res)=>{
  
  
  admin.database().ref().child('react/users/'+req.body.value + '/role').set('ShopOwnerDelete')

      .then(function(userRecord) {
        
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

    
//Add Seat allocation
server.post('/addSeatAllocation',(req,res)=>{
  
  
  admin.database().ref().child('react/seatallocations').push({
        name: req.body.name,
        seats: req.body.seats, 
        venue: req.body.venue,
      })

      .then(function(userRecord) {
        
        res.send('POST request');
      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });


//Display Seat Allocations to Event Organizers

server.post('/displaySeatallocationsOnEventOrganizers',(req,res)=>{
    
    
  admin.database().ref('react/seatallocations').orderByChild("venue").equalTo(req.body.venue).once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});


//Add Shops

server.post('/addShops',(req,res)=>{
  
  
  admin.database().ref().child('react/shops').push({
        name: req.body.name,
        description: req.body.description,
        venue: req.body.venue,   
      })

      .then(function(userRecord) {
        
        res.send('POST request');


      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Receive Shops list
server.post('/receiveShops',(req,res)=>{
    
    
  admin.database().ref('react/shops').once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Add products to Shop

server.post('/addProductsToShop',(req,res)=>{
      
  admin.database().ref().child('react/shops/'+req.body.id+'/products').push({
      description : req.body.description,
      category : req.body.category,
      name : req.body.name,
      image : req.body.image,
      amount : req.body.amount,
      price : req.body.price,
      })

      .then(function(userRecord) {
        res.send('POST Method');
        

      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });

//Receive Products from Shop

server.post('/receiveProductsFromShop',(req,res)=>{
    
    
  admin.database().ref('react/shops/'+req.body.shopid+'/products').once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Update Stock

server.post('/updateStock',(req,res)=>{
  
  
  admin.database().ref().child('react/shops/'+req.body.shopid +'/products/'+req.body.productid+'/amount/').set(
        req.body.amount   
      )

      .then(function(userRecord) {
        
        res.send('POST request');


      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });


//Display Shops to Event Organizers

server.post('/displayShopsEventOrganizers',(req,res)=>{
    
    
  admin.database().ref('react/shops').orderByChild("venue").equalTo(req.body.venue).once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});


//Add Carparks


server.post('/addCarParks',(req,res)=>{
  
  
  admin.database().ref().child('react/carparks').push({
        name: req.body.name,
        carparkslots: req.body.carparkslots,
        venue: req.body.venue,
        carprice: req.body.carprice,
        threewheelerprice: req.body.threewheelerprice,
      })

      .then(function(userRecord) {
        
        res.send('POST request');


      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });


//Receive Car park list
server.post('/receiveCarParks',(req,res)=>{
    
    
  admin.database().ref('react/carparks').once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});


//Receive Car park on id
server.post('/receiveCarParksOnId',(req,res)=>{
    
    
  admin.database().ref('react/carparks/'+req.body.carparkid).once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});


//Add Cark slot to id


server.post('/addCarParkSlotToId',(req,res)=>{
  
  
  admin.database().ref().child('react/carparks/'+req.body.carparkid+'/carparkdates').push({
        date: req.body.date,
        carparkslot: req.body.carparkslot,
      })

      .then(function(userRecord) {
        
        res.send('POST request');


      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });


//Receive Car park dates

server.post('/receiveCarParkDates',(req,res)=>{
    
    
  admin.database().ref('react/carparks/'+req.body.carparkid+'/carparkdates').once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Edit Car park dates

server.post('/editCarParkDates',(req,res)=>{
    
    
  admin.database().ref('react/carparks/'+req.body.carparkid+'/carparkdates/'+req.body.carparkdateid+'/carparkslot/').once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});

//Update Car park dates


server.post('/updateCarParkDate',(req,res)=>{
  
  
  admin.database().ref().child('react/carparks/'+req.body.carparkid+'/carparkdates/'+req.body.carparkdateid+'/carparkslot').set(req.body.seats)

      .then(function(userRecord) {
        
        res.send('POST request');


      })
      .catch(function(error) {
        console.log("Error creating event:", error);
      });
    });



//Edit Car park dates

server.post('/displayCarParkingsEventOrganizers',(req,res)=>{
    
    
  admin.database().ref('react/carparks').orderByChild("venue").equalTo(req.body.venue).once("value", function(snapshot) {
    res.json({msg:true, data:snapshot.val()});
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
});


server.listen(3002, () => console.log('Example app listening on port 3001!'));