import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import * as firebase from 'firebase';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{}
        }
        this.getkey = this.getkey.bind(this);
    }

    getkey(e){
        e.preventDefault(); 
        const emailRegistered = this.refs.inputEmail.value;
        const passRegistered = this.refs.inputPassword.value;
        
    
        firebase.auth().signInWithEmailAndPassword(emailRegistered, passRegistered)
        .then((firebaseUser) =>{
            console.log('success -',firebaseUser);
            NotificationManager.success('Login Successful');
            this.props.history.push(`/Paynow/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`);
        })
        
        .catch(function(error) {
            NotificationManager.error('Login Error');
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log('error',errorCode);

        
        });
        
    };
    

    componentDidMount() {
        axios.post('http://localhost:3002/displayOrderUser', {
            orderid: this.props.match.params.orderId,
          })
          .then( (response) => {
            
            this.setState({datas: response.data.data});
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }

    render() {
        
        return (
            <div className="container-new">
               <h1 className="seatplaningtitle">Checkout</h1>
               <div className="col-md-12 informationbar">
               <p>VIP Seats Booking Cost - Rs.{this.state.datas.vip}  </p>
               <p>ODC Seats Planning Cost - Rs.{this.state.datas.odc}  </p>
               
               <p>Car Parking Cost - Rs.{this.state.datas.car}  </p>
               <p>Threewheeler Cost - Rs.{this.state.datas.threewheeler}  </p>
               <p>Food cost - Rs.{this.state.datas.shop}</p>
               <h2>Total -  {this.state.datas.shop + this.state.datas.car + this.state.datas.threewheeler + this.state.datas.vip + this.state.datas.odc} </h2>
               
               
                </div>
                <div className="col-md-6">
               <h1>Did You Already User?</h1>
               <form className="form-horizontal">
                <fieldset>
                      <legend><h1>Login</h1></legend>
                            <div className="form-group">
                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                    <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="inputEmail"/>
                                    </div>
                                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                                    <div className="col-lg-10">
                                    <input type="password" className="form-control" id="inputPass" placeholder="Password" ref="inputPassword"/>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10">
                                    <button type="submit" className="btn btn-default" onClick={this.getkey}>Login</button>&nbsp;&nbsp;&nbsp;
                                    {/* <img id="myImg" src="http://www.setyourowntests.com/_/rsrc/1468869481521/help/accounts/btn_google_signin_dark_normal_web%402x.png" height="52px" weight="50px" alt="Trolltunga, Norway" onClick={this.googlesignin}/>
                                    <img id="myImg" src="https://i.stack.imgur.com/ZW4QC.png"  alt="Trolltunga, Norway" onClick={this.fbsignin} />
                                     */}
                                    </div>
                                    
                            </div>
                </fieldset>
          </form>
               </div>
               <div className="col-md-6">
               <h1>Express Booking</h1>
               <Link className="btn btn-default" to={`/Paynow/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Pay Now</Link>
               </div>

            </div>
        );
    }
}

export default Checkout;