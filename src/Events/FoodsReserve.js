import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodsReserve extends Component {
    render() {
        return (
            <div className="container-new">
               <h1>Food Reserve</h1><br/>
               <p>{this.props.match.params.eventId}</p>
                <p>{this.props.match.params.showId}</p>
                <p>{this.props.match.params.orderId}</p>
            </div>
        );
    }
}

export default FoodsReserve;