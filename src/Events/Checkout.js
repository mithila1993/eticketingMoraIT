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
            datas:{},
            vip:0,
            odc:0,
            threewheeler:0,
            car:0,
            food:0,
            total:0
        }
        //this.getkey = this.getkey.bind(this);
    }

    // getkey(e){
    //     e.preventDefault(); 
    //     const emailRegistered = this.refs.inputEmail.value;
    //     const passRegistered = this.refs.inputPassword.value;
        
    
    //     firebase.auth().signInWithEmailAndPassword(emailRegistered, passRegistered)
    //     .then((firebaseUser) =>{
    //         console.log('success -',firebaseUser);
    //         NotificationManager.success('Login Successful');
    //         this.props.history.push(`/Paynow/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`);
    //     })
        
    //     .catch(function(error) {
    //         NotificationManager.error('Login Error');
    //       // Handle Errors here.
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       console.log('error',errorCode);

        
    //     });
        
    // };
    

    componentDidMount() {
        axios.post('http://localhost:3002/displayOrderUser', {
            orderid: this.props.match.params.orderId,
          })
          .then( (response) => {
            this.setState({
                vip:response.data.data.vip,
                odc:response.data.data.odc,
                car:response.data.data.car,
                threewheeler:response.data.data.threewheeler,
                shop:response.data.data.shop,
                total:response.data.data.vip + response.data.data.odc +response.data.data.car +response.data.data.threewheeler +response.data.data.shop,
            });
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }

    render() {
        console.log('vip',this.state.vip);
        console.log('odc',this.state.odc);
        return (
            <div className="container-new">
               <h1 className="seatplaningtitle">Checkout</h1>
               <div className="col-md-12 informationbar">
               <p>VIP Seats Booking Cost - Rs.{this.state.vip}  </p>
               <p>ODC Seats Planning Cost - Rs.{this.state.odc}  </p>
               
               <p>Car Parking Cost - Rs.{this.state.car}  </p>
               <p>Threewheeler Cost - Rs.{this.state.threewheeler}  </p>
               <p>Food cost - Rs.{this.state.shop}</p>
               <h2>Total -  {this.state.total} </h2>
               
               <Link className="btn btn-default" to={`/Paynow/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Pay Now</Link>

                </div>
                
               

            </div>
        );
    }
}

export default Checkout;