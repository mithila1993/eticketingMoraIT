import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{}
        }
    }
    

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
               
               <Link className="btn btn-default" to={`/Paynow/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Pay Now</Link>
                </div>
            </div>
        );
    }
}

export default Checkout;