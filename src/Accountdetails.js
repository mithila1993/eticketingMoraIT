import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class Accountdetails extends Component {
    constructor(props){
        super(props);
        
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.createEvent = this.createEvent.bind(this);
      }
    
      
    

  render() {
    var user = firebase.auth().currentUser;
      console.log("State",this.props.callLink)
        var namestate;
      if(this.props.callLink===1){
          namestate = <h1>Welcome</h1>     ;
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
        
            console.log('button clicked');
        
            firebase.database().ref().child('react/event').push({
                event: eventEntered,
                description: descriptionEntered,
                
              });

            

}}

export default Accountdetails;