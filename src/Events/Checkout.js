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
               { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <div className="col-md-12" >
                    {console.log(description)}
                  <div className="col-md-2">
                  <p key={i}> {description[1].name} </p></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"><p> {description[1].showid}</p></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"><p> {description[1].eventid}</p></div>
                  <div className="col-md-2">
                  
                  
                  </div>
                  </div>
                  
                  </div>

                  </div>
                  
                          )
                  })}
            </div>
        );
    }
}

export default Checkout;