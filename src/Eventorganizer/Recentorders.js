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
                <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">VIP</th>
                            <th scope="col">ODC</th>
                            
                            <th scope="col">Car</th>
                            <th scope="col">Trishaw</th>
                            <th scope="col">Shop</th>
                            <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <tr className="table-hover">
                  <th scope="row" key={i}>{description[0]} </th>
                  <td> {description[1].name}</td>
                  <td> {description[1].vip}</td>
                  <td> {description[1].odc}</td>
                  <td> {description[1].car}</td>
                  <td> {description[1].threewheeler}</td> 
                  <td> {description[1].shop}</td>
                  <td> {description[1].status}</td>
                  </tr>
                          )
                  })}
                  </tbody>
                        </table>

            </div>
        );
    }
}

export default Recentorders;