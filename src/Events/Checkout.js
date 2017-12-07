import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        return (
            <div className="container-new">
               <h1>Checkout</h1><br/>
                <h1>{this.props.eventid}</h1><br/>
                <button onClick={()=>this.props.eventmenu(7,this.props.eventid)}>Submit</button><br/>
                <button onClick={()=>this.props.eventmenu(5,this.props.eventid)}>Back</button> 
            </div>
        );
    }
}

export default Checkout;