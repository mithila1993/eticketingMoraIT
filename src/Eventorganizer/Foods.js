import React, { Component } from 'react';
import axios from 'axios';

class Foods extends Component {
    constructor(props) {
        super(props);
        this.submitFood = this.submitFood.bind(this);
    }
    

    submitFood(e){
        console.log('clicked');
        e.preventDefault();
                axios.post('http://localhost:3002/addFoods', {
                name : this.refs.inputFood.value,
                description : this.refs.inputDescription.value,
                category : this.refs.inputCategory.value,
                price : this.refs.inputPrice.value,
                showid :this.props.match.params.showid,
                eventid:this.props.match.params.eventid

                
              })
              .then(function (response) {
                
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
        
            
            }
    render() {
        return (
            <div>
                <h1>Foods</h1>
                {this.props.match.params.eventid}
                <h1>{this.props.match.params.showid}</h1>
                <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Create Event</h1></legend>
                              <div className="form-group">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Food Name</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Food Name" ref="inputFood"/>
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
                                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Unit Price</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputCategory" placeholder="Write Category" ref="inputPrice"/>
                                         </div>
                                      </div>
                                      <br/><br/>
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      <button type="submit" className="btn btn-default" onClick={this.submitFood}>Submit Food</button>
                                      
                                      </div>
                                        
                              </div>
                  </fieldset>
            </form>
            </div>
        );
    }
}

export default Foods;