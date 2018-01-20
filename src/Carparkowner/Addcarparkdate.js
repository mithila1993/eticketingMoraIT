import React, { Component } from 'react';
import axios from 'axios';

class Addcarparkdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},   
        }
        this.createCarParkDate = this.createCarParkDate.bind(this);
    }

    componentWillMount() {
        var places=axios.post('http://localhost:3002/receiveCarParksOnId', {
            carparkid: this.props.match.params.carparkid,
                    })
                    .then( (response) => {
                      this.setState({datas: response.data.data});
                    })
                    .catch( (error) => {
                      console.log("event error",error);
                    });
    
    }

    createCarParkDate(e){
        e.preventDefault(); 
        console.log(this.refs.inputDate.value);
            axios.post('http://localhost:3002/addCarParkSlotToId', {
                carparkid: this.props.match.params.carparkid,
                date: this.refs.inputDate.value,
                carparkslot:this.state.datas.carparkslots,
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
                {/* {this.props.match.params.carparkid}
                Add Available Dates for Car Parks */}
                <div>
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Add Available Dates for Car Parks</h1></legend>
                              <div className="form-group">
                              <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Event Name</label>
                                      <div className="col-lg-4">
                                      <input type="date" className="form-control" id="inputEmail" placeholder="Event Name" ref="inputDate"/>
                                      </div>
                                      </div>
                                      
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      
                                      <button type="submit" className="btn btn-default" onClick={this.createCarParkDate}>create Car Park Date</button>
                                      </div>
                              </div>
                  </fieldset>
            </form>
  </div>                 

            </div>
        );
    }
}

export default Addcarparkdate;