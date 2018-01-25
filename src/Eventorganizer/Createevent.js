import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import {
    Link
  } from 'react-router-dom';
  import axios from 'axios';
  import {NotificationContainer, NotificationManager} from 'react-notifications';



class Createevent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            showdeatils :0,
            datas: {}
        }
        // this.addShows = this.addShows.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
        
    }

    
    createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
            NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Title here');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };

    // addShows(e){
    //     e.preventDefault();
    //     this.setState(prevState => ({
    //         counter: prevState.counter + 1
    //       }));
    // }

    
    

    submitEvent(e){
        let thiscom = this;
        e.preventDefault();
        var downImage;
        var file = this.refs.inputFile.files[0];
        var storageRef = firebase.storage().ref('events/'+ file.name);
        var uploadState = storageRef.put(file).then(function(snapshot){
            
                console.log(snapshot.downloadURL);
                axios.post('http://localhost:3002/createevents', {
                name : thiscom.refs.inputEvent.value,
                description : thiscom.refs.inputDescription.value,
                category : thiscom.refs.inputCategory.value,
                image : snapshot.downloadURL
                
              })
              .then( (response) => {
                NotificationManager.success('Successfully Event Created');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
        });
            
        console.log(uploadState);
        // firebase.database().ref().child('react/files').push({
        //     fileName: file.name, });
        // setTimeout(function() { //Start the timer
        //     var nimal = firebase.storage().ref('events').child(file.name).getDownloadURL();
        //     console.log('nimal',nimal.aa);
                
        // }.bind(this), 1000);
        
    //   console.log('2nd url',downImage);

        // var event = {
        //     name : this.refs.inputEvent.value,
        //     description : this.refs.inputDescription.value,
        //     category : this.refs.inputCategory.value,
        //     image : file.name,
        // }
    //     axios.post('http://localhost:3002/createevents', {
    //         name : this.refs.inputEvent.value,
    //         description : this.refs.inputDescription.value,
    //         category : this.refs.inputCategory.value,
    //         image : file.name
            
    //       })
    //       .then(function (response) {
            
    //         console.log("event response",response);
    //       })
    //       .catch(function (error) {
    //         console.log("event error",error);
    //       });

    //     // firebase.database().ref('react/event').push(
    //     //        event
    //     //       );
    }
    

    render() {

        

    // var shows = [];
    // for (var i = 0; i < this.state.counter; i++) {
    //     shows.push(
    //     <div>
    //     <h1>Show {i}</h1>
    //     <label htmlFor="inputEmail" className="col-lg-2 control-label">Venu Location</label>
    //     <div className="col-lg-10">
    //     <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputVenue"/>
    //     </div>
    //     <label htmlFor="inputEmail" className="col-lg-2 control-label">Hall</label>
    //     <div className="col-lg-10">
    //     <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputHall"/>
    //     </div>
    //     <label htmlFor="inputEmail" className="col-lg-2 control-label">Date</label>
    //     <div className="col-lg-10">
    //     <input type="date" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputDate"/>
    //     </div>
    //     <label htmlFor="inputEmail" className="col-lg-2 control-label">Start Time</label>
    //     <div className="col-lg-10">
    //     <input type="time" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputStartTime"/>
    //     </div>
    //     <label htmlFor="inputEmail" className="col-lg-2 control-label">End Time</label>
    //     <div className="col-lg-10">
    //     <input type="time" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEndTime"/>
    //     </div>
    //     </div>
    //   ); 
    //   }

        return (
            <div >
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Create Event</h1></legend>
                              <div className="form-group">

                              <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Event Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEvent"/>
                                      </div>
                                      </div>

                                      <div className="col-lg-12 ">
                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Description</label>
                                      <div className="col-lg-10 textarea">
                                      <textarea rows="4" cols="50" className="form-control" id="inputEmail" placeholder="Write a description" ref="inputDescription"/>
                                    </div>
                                    </div>


                                    <div className="col-lg-12">
                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Category</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputCategory" placeholder="Write Category" ref="inputCategory"/>
                                         </div>
                                         </div>

                                         <div className="col-lg-12">
                                    <label htmlFor="inputCategory" className="col-lg-2 control-label">Upload image</label>
                                     <div className="col-lg-10">
                                        
                                        <input type="file" className="upload-group" id="file" ref="inputFile"/>
                                        </div>
                                        </div>


                                      
                                      {/* <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      <button type="submit" className="btn btn-default" onClick={this.addShows}>Add Show</button>
                                      </div> */}
                                      {/* {shows} */}
    
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10 submitbuttoncreateevent">
                                      <button type="submit" className="btn btn-default" onClick={this.submitEvent}>Submit</button>
                                      
                                      </div>
                                        
                              </div>
                  </fieldset>
            </form>
            
  </div>               
        );
    }
}

export default Createevent;