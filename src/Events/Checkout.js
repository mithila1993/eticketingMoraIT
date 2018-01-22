import React, { Component } from 'react';
import axios from 'axios';

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
               <h1>Checkout</h1>
               {console.log('datas',this.state.datas)}
               {this.state.datas.eventid}
               <p>shop cost - {this.state.datas.shop}</p>
               <p>car cost - {this.state.datas.car}  </p>
               <p>threewheeler cost - {this.state.datas.threewheeler}  </p>
               <p>vip cost - {this.state.datas.vip}  </p>
               <p>odc cost - {this.state.datas.odc}  </p>
               <h1>Total -  {this.state.datas.shop + this.state.datas.car + this.state.datas.threewheeler + this.state.datas.vip + this.state.datas.odc} </h1>
               
            </div>
        );
    }
}

export default Checkout;