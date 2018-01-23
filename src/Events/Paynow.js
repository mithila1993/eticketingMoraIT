import React, { Component } from 'react';
import axios from 'axios'; 

class Paynow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggin: {},
            accountmenu:4,
            chooseuser:{}
        }
        this.payNow = this.payNow.bind(this); 
    }

payNow(e){
    e.preventDefault();
            axios.post('http://localhost:3002/payNow', {
                orderid: this.props.match.params.orderId,
                tel:this.refs.inputTel.value
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
            <div className="container-new">
                <h1>Pay Now</h1>
                <p>{this.props.match.params.eventId}</p>
                <p>{this.props.match.params.showId}</p>
                <p>{this.props.match.params.orderId}</p>
                <div>
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1>Enter Payment Details</h1></legend>
                              <div className="form-group">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Credit card number </label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Credit Card number" ref="inputCredit"/>
                                      </div>

                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Code </label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Code" ref="inputCode"/>
                                      </div>

                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Telephone number</label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Telephone Number" ref="inputTel"/>
                                         </div>
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      
                                      <button className="btn btn-default" onClick={this.payNow}>PayNow</button>
                                      </div>
                              </div>
                  </fieldset>
            </form>
        </div>               

                <div></div>
            </div>
        );
    }
}

export default Paynow;