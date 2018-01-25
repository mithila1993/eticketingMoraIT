import React, { Component } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';



class Createshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venue:'',
        }
        this.submitEvent = this.submitEvent.bind(this);
    }
    
    submitEvent(e){
        e.preventDefault();
        axios.post('http://localhost:3002/addShops', {
                name: this.refs.inputShop.value,
                description: this.refs.inputDescription.value,
                venue:this.state.venue,
              })
              .then(function (response) {
                NotificationManager.success('Successfully Shop Created');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
    }

    handleVenue(e){
    
        this.setState({venue:e.target.value},()=>{
          if(this.state.venue !== 'None'){
             console.log(this.state.venue);
        }
          
        });   
    }
    
    render() {
        return (
            <div>
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Create Shop</h1></legend>
                              <div className="form-group">

                              <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Shop Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Shop Name" ref="inputShop"/>
                                      </div>
                                      </div>

                                      <div className="col-lg-12">
                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Description</label>
                                      <div className="col-lg-10 textarea ">
                                      <textarea rows="4" cols="53" className="form-control" id="inputEmail" placeholder="Write a description" ref="inputDescription"/>
                                    </div>
                                    </div>

                                      
                                    <div className="col-lg-12">     
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Near Venue</label>
                                        <div className="col-lg-8">
                                        <select className="form-control" onChange={this.handleVenue.bind(this)} >
                                        <option value="None">None</option>
                                        <option value="Savoy">Savoy</option>
                                        <option value="Liberty">Liberty</option>
                                        <option value="Majestic City">Magestic City</option>  
                                    </select>
                                    </div>
                                    </div>

                                    <div className="col-lg-12 submitbuttoncreateevent">    
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      <button type="submit" className="btn btn-default" onClick={this.submitEvent}>Submit</button>
                                      </div>  
                                      </div>
                                        
                              </div>
                  </fieldset>
            </form>
            
  </div>
        );
    }
}

export default Createshop;