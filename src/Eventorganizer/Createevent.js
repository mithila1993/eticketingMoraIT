import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import {
    Link
  } from 'react-router-dom';
  import axios from 'axios';



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

    

    // addShows(e){
    //     e.preventDefault();
    //     this.setState(prevState => ({
    //         counter: prevState.counter + 1
    //       }));
    // }

    componentDidMount() {
        axios.post('http://localhost:3002/displayEventsOrganizer', {
            eventId: this.props.match.params.eventId,
          })
          .then( (response) => {
            
            this.setState({datas: response.data.data});
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }
    

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
              .then(function (response) {
                
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
            <div>
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Create Event</h1></legend>
                              <div className="form-group">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Event Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEvent"/>
                                      </div>
                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Description</label>
                                      <div className="col-lg-10">
                                      <textarea rows="4" cols="50" className="form-control" id="inputEmail" placeholder="Write a description" ref="inputDescription"/>
                                    </div>
                                      <div className="col-lg-10">
                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Category</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputCategory" placeholder="Write Category" ref="inputCategory"/>
                                         </div>
                                     
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
                                      <br/><br/>
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      <button type="submit" className="btn btn-default" onClick={this.submitEvent}>Submit</button>
                                      
                                      </div>
                                        
                              </div>
                  </fieldset>
            </form>
            <h1>Your Events</h1>
            { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <div className="col-md-12" >
                 
                  <div className="col-md-4" >
                  <h1 key={i}> {description[1].name} </h1>
                  </div>
                  <div className="col-md-6" >
                  <p> {description[1].description}</p>
                  </div>
                  <div className="col-md-2" >
                  <Link className="btn btn-default" to={`/Shows/${description[0]}`}>Add Shows</Link>
                  </div>
                  
                  </div>

                  </div>
                  </div>
                          )
                  })}
  </div>               
        );
    }
}

export default Createevent;