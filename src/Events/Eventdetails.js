import React, { Component } from 'react';

class Eventdetails extends Component {
    render() {
        return (
            <div className="container-new">
                <h1>Event Details</h1><br/>
                <h1>{this.props.eventid}</h1><br/>
                <button onClick={()=>this.props.eventmenu(3,this.props.eventid)}>Allocate Seats</button><br/>
                <button onClick={()=>this.props.eventmenu(1,this.props.eventid)}>Back</button>
            </div>
        );
    }
}

export default Eventdetails;