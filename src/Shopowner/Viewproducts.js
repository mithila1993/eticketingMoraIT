import React, { Component } from 'react';
import axios from 'axios';


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
                
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });

}    
    

    render() {
        return (
            <div>
                {this.props.match.params.shopid}
                Viewproducts
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    
                  <div className="col-md-12" >
                 <div className="col-md-2"><img src={description[1].image} height="250px" width="170px"/></div>
                  <div className="col-md-10">
                  <h1 key={i}> {description[1].name} </h1>
                  <p> {description[1].description}</p>
                  <p> {description[1].category}</p>
                  <p> {description[1].amount}</p>
                 <input type="number" name="quantity" ref="amount" defaultValue={description[1].amount} onChange={(e) => this.changeAmount(description[0], e)}/> 
                  <p> {description[1].price}</p>
                  <p> {description[0]}</p>
                  </div>
                  </div>
                  
                          )
                  })}

            </div>
        );
    }
}

export default Viewproducts;