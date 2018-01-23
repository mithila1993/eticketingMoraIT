import React, { Component } from 'react';
import axios from 'axios';

class Recentorders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{}
        }  
    }


componentWillMount() {
    axios.post('http://localhost:3002/getOrders', {
            
                })
                .then( (response) => {
                  this.setState({datas: response.data.data});
                })
                .catch( (error) => {
                  console.log("event error",error);
                });

}


    render() {
        return (
            <div>
                <h1>Recent Orders</h1>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <h1 key={i}> {description[1].name} </h1>
                  <p> {description[1].eventid}</p>
                  <p> {description[1].status}</p>
                  <p> {description[0]}</p>
                  </div>
                  </div>
                          )
                  })}

            </div>
        );
    }
}

export default Recentorders;