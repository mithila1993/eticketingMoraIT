import React, { Component } from 'react';
import * as firebase from 'firebase';


class Eventorganizermain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter1: 1,
            counter2: 0,
        };
        this.addEventLocations = this.addEventLocations.bind(this);
        this.addHallSections = this.addHallSections.bind(this);
    }

    addEventLocations(e){
        e.preventDefault();
        this.setState(prevState => ({
            counter1: prevState.counter1 + 1
          }));
        firebase.database().ref('places').push({
            name : this.refs.inputEvent1.value
          });
    }

    addHallSections(e){
        e.preventDefault();
        this.setState(prevState => ({
            counter2: prevState.counter2 + 1
          }));
    }


    render() {

        var eventLocations = [];
        var halls = [];

        // for (var j = 0; j < this.state.counter2; j++) {
        //     halls.push(<div><label htmlFor="inputEmail" className="col-lg-2 control-label">Hall Name</label>
        //     <div className="col-lg-6">
        //     <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEvent1"/>
        //     </div>
        //     <div className="col-lg-2">
        //     <button className="btn btn-default" onClick={this.addHallSections}>create Hall</button>
        //     </div>
        //     <div className="col-lg-2">
        //     <button className="btn btn-default" onClick={this.addHallSections}>create gggggHall</button>
        //     </div>
        //     <div className="col-lg-12"></div>
        //     </div>
                  
        //     );}

        for (var i = 0; i < this.state.counter1; i++) {
          eventLocations.push(<div><label htmlFor="inputEmail" className="col-lg-2 control-label">Location Name</label>
          <div className="col-lg-6">
          <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEvent1"/>
          </div>
          <div className="col-lg-2">
          <button className="btn btn-default" onClick={this.addEventLocations}>create Location</button>
          </div>
          <div className="col-lg-2">
          <button className="btn btn-default" onClick={this.addHallSections}>create Hall</button>
          </div>
          <div className="col-lg-12"></div>
          </div>
               
          ); 
        }

        
       
        return (
            <div>
                
                <h1>Event organizer main</h1>
                <div>
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Create Event</h1></legend>
                              <div className="form-group">
                                        {eventLocations}
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Event Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEvent[1]"/>
                                      </div>
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Event Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEvent[2]"/>
                                      </div>
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Event Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputEvent[3]"/>
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
            </div>
        );
    }
}

export default Eventorganizermain;