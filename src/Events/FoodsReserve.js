import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import Oneproduct from "./Oneproduct";
import {NotificationContainer, NotificationManager} from 'react-notifications';

class FoodsReserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total:0,
            datas:{},
            pricelist:{
                0:"Erase",
                1:"Erase",
                2:"Erase",
                3:"Erase",
                4:"Erase",
                5:"Erase",
                6:"Erase",
                7:"Erase",
                8:"Erase",
                9:"Erase",
                10:"Erase",
            } 
        }
        this.totalprice = this.totalprice.bind(this);
    }

    changeAmount(i,price,id,e){
        console.log('e',e.target.value);
        console.log('id',id);
        //var n = parseInt(price)*parseInt(e);
        
        var n = parseInt(price)*parseInt(e.target.value);
        console.log(n);
        let jasper = Object.assign({}, this.state.pricelist);
        jasper[i] = "Reserved";
        this.setState({jasper},() => {
            console.log(this.state.pricelist);
        });

        // var q = e.target.value
        // axios.post('http://localhost:3002/updateStock', {
        //             shopid:this.props.match.params.shopid,
        //             amount: q,
        //             productid:id
        //           })
        //           .then(function (response) {
                    
        //             console.log("event response",response);
        //           })
        //           .catch(function (error) {
        //             console.log("event error",error);
        //           });
    }    

    totalprice(price,value){
        if(value==="plus"){
            this.setState(prevState => ({
                total: prevState.total + parseInt(price)
              }));
        }if(value==="minus"){
            this.setState(prevState => ({
                total: prevState.total - parseInt(price)
              }));
        }
    }

    componentWillMount() {
        axios.post('http://localhost:3002/displayShopProductsOnUser', {
                eventid:this.props.match.params.eventId,
                showid:this.props.match.params.showId,
            })
            .then( (response) => {
              this.setState({datas: response.data},() => {
                console.log('1111',this.state.datas);
                               });
              
            })
            .catch( (error) => {
              console.log("car",error);
            });    
}

enterShopCost(){
    console.log("clicked");
        axios.post('http://localhost:3002/enterShopCost', {
                shop: this.state.total,
                orderid:this.props.match.params.orderId

              })
              .then(function (response) {
                NotificationManager.success('Successfully Foods Confirmed');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });

    }

    render() {
        return (
            <div className="container-new">
            
               <h1 className="seatplaningtitle">Food Reserve</h1><br/>
               <div className="col-md-12 informationbar">
               <h2>Total Food Price - {this.state.total}</h2>
               <button className="btn btn-default" onClick={this.enterShopCost.bind(this)}>Confirm </button>  <Link className="btn btn-default" to={`/Checkout/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Go To The Checkout</Link>
            </div>
            {/* <button onClick={() => { this.child.getAlert(); }}>Click</button> */}
               {/* <p>{this.props.match.params.eventId}</p>
                <p>{this.props.match.params.showId}</p>
                <p>{this.props.match.params.orderId}</p> */}
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div><Oneproduct 
                        ima={`${description[1].image}`} 
                        
                        name={`${description[1].name}`} 
                        description={`${description[1].description}`} 
                        price={`${description[1].price}`} 
                        category={`${description[1].category}`} 
                        totalprice={this.totalprice}
                        //ref={instance => { this.child = instance; }}
                        id={`${description[0]}`}
                        /></div>
                    
                

                  
                          )
                  })}
            </div>
        );
    }
}

export default FoodsReserve;