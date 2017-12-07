import React, { Component } from 'react';

class Carparking extends Component {
    render() {
        return (
            <div className="container-new">
               <h1>Car parking</h1><br/>
                <h1>{this.props.eventid}</h1><br/>
                <button onClick={()=>this.props.eventmenu(5,this.props.eventid)}>Allocate Beverages</button><br/>
                <button onClick={()=>this.props.eventmenu(3,this.props.eventid)}>Back</button> 
            </div>
        );
    }
}

export default Carparking;