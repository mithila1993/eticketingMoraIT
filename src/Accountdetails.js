import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import * as firebase from 'firebase';
import upload from './upload';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Accountdetails extends Component {
    constructor(props){
        super(props);
        
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        
        this.state = {
            temp : {},
            data : [
                {name: 'Concert A', Viewed: 4000, Bought: 2400, amt: 2400},
                {name: 'Concert B', Viewed: 3000, Bought: 1398, amt: 2210},
                {name: 'Concert C', Viewed: 2000, Bought: 1000, amt: 2290},
                {name: 'Concert D', Viewed: 2780, Bought: 2500, amt: 2000},
                {name: 'Concert E', Viewed: 1890, Bought: 1000, amt: 2181},
                {name: 'Concert F', Viewed: 2390, Bought: 2000, amt: 2500},
   
            ],
            tablerow : [{
                name: 'Concert A',
                Viewed: 4000,
                Bought: 400,
                Precentage :10,
              },{
                name: 'Concert B',
                Viewed: 3000,
                Bought: 2000,
                Precentage :66,
              },{
                name: 'Concert C',
                Viewed: 2233,
                Bought: 1532,
                Precentage :50,
              },
              ],
            tablecolumns : [{
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
              }, {
                Header: 'Viewed',
                accessor: 'Viewed',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
              }, {
                Header: 'Bought',
                accessor: 'Bought',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
              }, {
                Header: 'Precentage',
                accessor: 'Precentage',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
              }]
              
      }
    }
      
    

  render() {
    var user = firebase.auth().currentUser;
     const starCountRef = firebase.database().ref('react/event').orderByChild('uid').equalTo(user.uid);
    starCountRef.once('value', (snapshot)=>{
        
        this.setState({temp: Object(snapshot.val())})
        
    });
    
    
    
      
        var namestate;
      if(this.props.callLink===1){
          namestate = <div><h1>DashBoard</h1>
                        <p></p>
                        <LineChart width={750} height={400} data={this.state.data}
                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Line type="monotone" dataKey="Viewed" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="Bought" stroke="#82ca9d" />
                        </LineChart>
                        <br/>
                        <br/>
                        <ReactTable
                        data={this.state.tablerow}
                        columns={this.state.tablecolumns}
                            />

                        </div>
               ;
      }if(this.props.callLink===2){
          namestate = <div className="container">
                            <form className="form-horizontal">
                                 <fieldset>
                                <legend><h1>Change Email</h1></legend>
                                    <div className="form-group">
                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                        <div className="col-lg-4">
                                        <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="input"/>
                                            </div>
                 
                                            <div className="col-lg-4">
                                        <button type="submit" className="btn btn-default" onClick={this.setEmail}>Change Email</button>
                                        </div>
                                             </div>
                                        </fieldset>
                                            </form>
                                         </div>; 
      }if(this.props.callLink===3) {
        namestate = <div className="container">
                        <form className="form-horizontal">
                            <fieldset>
                            <legend><h1>Change Password</h1></legend>
                                <div className="form-group">
                            <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                <div className="col-lg-4">
                                <input type="Password" className="form-control" id="inputEmail" placeholder="Password" ref="input"/>
                                    </div>

                                    <div className="col-lg-4">
                                <button type="submit" className="btn btn-default" onClick={this.setPassword}>Change Password</button>
                                    </div>
                                    </div>
                                </fieldset>
                                    </form>
                                    </div>;
        }if(this.props.callLink===4){
            namestate = <div>
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
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      
                                      <button type="submit" className="btn btn-default" onClick={this.createEvent}>create Event</button>
                                      </div>
                              </div>
                  </fieldset>
            </form>
  </div>                            
                                    
                                    ;
      }if(this.props.callLink===5){
        namestate = <div>
            <p>Upload</p>
            <input type="file" className="upload-group" id="file" ref="inputFile"/>
            <button type="btn btn-primary" id="uploadButton" onClick={this.uploadFile}>Upload image</button>
            </div>
    }if(this.props.callLink===6){
        namestate = 
            Object.entries(this.state.temp).map((data, i) => {
                
         console.log("dataaa",this.state.temp);
    return (<div>
            <h2 key={i}> {data[0]} </h2>
            <p> {data[1].event}</p>
            <p> {data[1].description}</p>
            <button onClick={(e) => this.deleteEvent(e, data[0])}>Delete Event</button>
            </div>)
    });
    }
    return (
      <div>
        {namestate}
        
      </div>
    );
  }

  setEmail(e){
    e.preventDefault(); 
    const input = this.refs.input.value;
    console.log('button clicked');
    var user = firebase.auth().currentUser;
    user.updateEmail(input).then(function() {
        console.log("Set email");
      }).catch(function(error) {
        console.log(error)
      });
    }

    setPassword(e){
        e.preventDefault(); 
        const input = this.refs.input.value;
        console.log('button clicked');
        var user = firebase.auth().currentUser;
        user.updateEmail(input).then(function() {
            console.log("Set email");
          }).catch(function(error) {
            console.log(error)
          });
        }

    createEvent(e){
        e.preventDefault(); 
            const eventEntered = this.refs.inputEvent.value;
            const descriptionEntered = this.refs.inputDescription.value;
            //const uidEntered = firebase.auth().currentUser.uid;
        
            console.log('button clicked');

            axios.post('http://localhost:3001/createevents', {
                event: eventEntered,
                description:descriptionEntered,
                //uid: uidEntered,
                
    
              })
              .then(function (response) {
                
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
        
            // firebase.database().ref().child('react/event').push({
            //     event: eventEntered,
            //     description: descriptionEntered,
                
            //   });

            

}
        uploadFile(e){
            e.preventDefault();
            console.log("upload clicked");
            var file = this.refs.inputFile.files[0];
            console.log(file);
            var storageRef = firebase.storage().ref('images/'+ file.name);
            var uploadState = storageRef.put(file);
            console.log(uploadState);
            firebase.database().ref().child('react/files').push({
                fileName: file.name,
                
                
              });

        }

        deleteEvent(e,number){
            e.preventDefault(); 
            console.log('button click',number);
            firebase.database().ref('react/event').child(number).remove();

            }

}

export default Accountdetails;