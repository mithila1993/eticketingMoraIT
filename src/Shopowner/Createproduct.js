import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import {
    Link
  } from 'react-router-dom';
  import axios from 'axios';

class Createproduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            showdeatils :0,
            datas: {}
        }
        this.submitEvent = this.submitEvent.bind(this);
        
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
    }

    render() {
        return (
            <div>
                {this.props.match.params.shopid}
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
            
  </div>
            </div>
        );
    }
}

export default Createproduct;