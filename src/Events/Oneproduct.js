import React, { Component } from 'react';
import axios from 'axios';

class OneProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount:0,
            cost:0
        }
    }

    setcost(price,value){
        if(value==="plus")
            this.setState((prevState)=>({amount: prevState.amount + 1}),() => {
            this.setState({cost: this.state.amount*price});
                this.props.totalprice(price,value);
            });
        if(value==="minus" && this.state.amount !== 0)
            this.setState((prevState)=>({amount: prevState.amount - 1}),() => {
            this.setState({cost: this.state.amount*price});
                this.props.totalprice(price,value);
            });
       
    }

    // getAlert(){
    //     console.log("clicked",this.props.name);
    // }

    render() {
        return (
            <div>
                <h1>{this.props.student}</h1>
                <div className="col-md-12" >
                 <div className="col-md-2"><img src={this.props.ima} height="250px" width="170px"/></div>
                  <div className="col-md-8">
                  <h1 > {this.props.name} </h1>
                  <p> {this.props.description}</p>
                  <p> price - {this.props.price} category - {this.props.category} </p>
                  
                  </div>
                  <div className="col-md-2">
                  <p>{this.state.amount}</p>
                  <p>{this.state.cost}</p>
                  <div><button className="btn btn-default" onClick={this.setcost.bind(this,this.props.price,"plus")}>+</button></div>
                  <div><button className="btn btn-default" onClick={this.setcost.bind(this,this.props.price,"minus")}>-</button></div>
                  {/* I want
                  <input type="number" name="quantity" ref="amount" defaultValue="0" onChange={(e) => this.changeAmount(i,description[1].price,description[0], e)}/> */}
                  </div>
                  
                  </div>
            </div>
        );
    }
}

export default OneProduct;