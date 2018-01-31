import React, { Component } from 'react';
import axios from 'axios'; 
import {NotificationContainer, NotificationManager} from 'react-notifications';
import * as firebase from 'firebase';

class Paynow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getDetails:''
        }
        this.payNow = this.payNow.bind(this); 
    }


componentWillMount() {
    if(firebase.auth().currentUser){
    axios.post('http://localhost:3002/getUserDetails', {
            email:  firebase.auth().currentUser.email,
        })
        .then( (response) => {
        this.setState({getDetails: response.data});
                console.log('chooo',this.state.getDetails.data.displayName);
        })
        .catch( (error) => {
        console.log("choose user",error);
        });

    }
}


payNow(e){
    e.preventDefault();
            axios.post('http://localhost:3002/payNow', {
                orderid: this.props.match.params.orderId,
                tel:this.refs.inputTel.value,
                userid:this.state.getDetails.key,
              })
              .then(function (response) {
                NotificationManager.success('Booking is Confirmed');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
}



    render() {
        return (
            <div className="container-new">
                {/* <p>{this.props.match.params.eventId}</p>
                <p>{this.props.match.params.showId}</p>
                <p>{this.props.match.params.orderId}</p> */}
                <div>
            <form className="form-horizontal">
                  <fieldset>
                        <legend><h1 className="seatplaningtitle">Enter Payment Details</h1></legend>
                              <div className="form-group">
                              <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Credit card number </label>
                                      <div className="col-lg-10">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Credit Card number" ref="inputCredit"/>
                                      </div></div>

                                      <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">4 Digit Code </label>
                                      <div className="col-lg-1">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Code" ref="inputCode"/>
                                      </div></div>

                                      <div className="col-lg-12">
                                      <label htmlFor="inputPassword" className="col-lg-2 control-label">Telephone number</label>
                                      <div className="col-lg-2">
                                      <input type="text" className="form-control" id="inputEmail" placeholder="Telephone Number" ref="inputTel"/>
                                         </div></div>

                                         <div className="col-lg-12">
                                      <div className="col-lg-2"></div>
                                      <div className="col-lg-10">
                                      
                                      
                                      <button className="btn btn-default btn-lg btn-info" onClick={this.payNow}>PayNow</button>
                                      
                                      </div>
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