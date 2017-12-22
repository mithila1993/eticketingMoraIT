import React, { Component } from 'react';
import axios from 'axios';

class Venuelocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            inputvalue :''
            
        }

        this.addLocation = this.addLocation.bind(this);
    }

    addLocation(e){
        e.preventDefault(); 
        
            axios.post('http://localhost:3002/addLocations', {
                location: this.refs.inputLocation.value,
              })
              .then(function (response) {
                
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });

}

    
    render() {
        axios.get('http://localhost:3002/getLocations', {
            
                })
                .then( (response) => {
                  this.setState({data: response.data.data});
                })
                .catch( (error) => {
                  console.log("event error",error);
                });
        return (
            
            <div>
                <div className="col-md-6">
                <div>
                    <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Add Venue Location</h1></legend>
                              <div className="form-group">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Location</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputLocation"/>
                                      </div>
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      
                                      <button type="submit" className="btn btn-default" onClick={this.addLocation}>Add Location</button>
                                      </div>
                              </div>
                  </fieldset>
            </form>
  </div>                 

                </div>
                <div className="col-md-6">
                { Object.entries(this.state.data).map((description, i) => {  
                  return (
                
                    <div>
                  <div>
                      <h1>{description[1].name}</h1>
                      <p>{description[0]}</p>
                      <button onClick={()=>this.props.adminMenu(7,description[0],description[1].name)}>Checkout</button>
                  </div>
                  </div>
                          )
                  })}

                </div>
            </div>
        );
    }
}

export default Venuelocations;