import React, { Component } from 'react';

class Beverages extends Component {
    render() {
        return (
            <div className="container-new">
               <h1>Beverages</h1><br/>
                <h1>{this.props.eventid}</h1><br/>
                <button onClick={()=>this.props.eventmenu(6,this.props.eventid)}>Checkout</button><br/>
                <button onClick={()=>this.props.eventmenu(4,this.props.eventid)}>Back</button> 
            </div>
        );
    }
}

export default Beverages;