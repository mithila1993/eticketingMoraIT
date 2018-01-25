import React, { Component } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Viewproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{},
        }
        this.changeAmount = this.changeAmount.bind(this);
    }


    
componentWillMount() {
    axios.post('http://localhost:3002/receiveProductsFromShop', {
            shopid:this.props.match.params.shopid
    })
    .then( (response) => {
      this.setState({datas: response.data.data});
    })
    .catch( (error) => {
      console.log("event error",error);
    });

    }
    
changeAmount(id,e){
    console.log('e',e.target.value);
    console.log('id',id);
    var q = e.target.value
    axios.post('http://localhost:3002/updateStock', {
                shopid:this.props.match.params.shopid,
                amount: q,
                productid:id
              })
              .then(function (response) {
                NotificationManager.success('Successfully Stock Updated');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });

}    
    

    render() {
        return (
            <div>
                
                <h1>View Products</h1>
                <div className="col-md-12">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                    
                            <th scope="col">Image</th>
                            <th scope="col">description</th>
                            <th scope="col">Price</th>
                            
                            <th scope="col">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    <tr className="table-hover">
                    <th scope="row" key={i}>{description[1].name} </th>
                            <td> <img src={description[1].image} height="100px" width="75px"/></td>
                            <td> {description[1].description}</td>
                            <td> Rs.{description[1].price}</td>
                            <td> <input type="number" name="quantity" ref="amount" defaultValue={description[1].amount} onChange={(e) => this.changeAmount(description[0], e)}/></td>
                            
                            </tr> 
                          )
                  })}
                  </tbody>
                        </table>
                  </div>

            </div>
        );
    }
}

export default Viewproducts;