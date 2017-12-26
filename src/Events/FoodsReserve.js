import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FoodsReserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},
            
        }
        
    }

addFoods(value1){
    axios.post('http://localhost:3002/addFoodsUser', {
            foodid: value1,
            orderid:this.props.match.params.orderId
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });

}
    
componentDidMount() {
        axios.post('http://localhost:3002/displayFoodsUser', {
            eventid: this.props.match.params.eventId,
            showid: this.props.match.params.showId
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
            <div>
                <h1>Foods Reserve</h1>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <div className="col-md-12" >
                 
                  <div className="col-md-2">
                  <p key={i}> {description[1].name} </p></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"><p> {description[1].category}</p></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-2"><p> {description[1].price}</p></div>
                  <div className="col-md-2">
                  
                  <button  className="btn btn-default" onClick={this.addFoods.bind(this,description[0])}>Add to cart</button>
                  </div>
                  </div>
                  
                  </div>

                  </div>
                  
                          )
                  })}
                  <Link className="btn btn-default" to={`/Checkout/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Checkout</Link>
            </div>
        );
    }
}

export default FoodsReserve;