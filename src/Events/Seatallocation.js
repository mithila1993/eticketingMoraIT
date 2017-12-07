import React, { Component } from 'react';

class Seatallocation extends Component {
    render() {
         return (
            <div className="container-new">
               <h1>Seat Allocation</h1><br/>
                <h1>{this.props.eventid}</h1><br/>
                <button onClick={()=>this.props.eventmenu(4,this.props.eventid)}>Allocate Carparking</button><br/>
                <button onClick={()=>this.props.eventmenu(2,this.props.eventid)}>Back</button> 
            </div>
        );
    }
}

export default Seatallocation;