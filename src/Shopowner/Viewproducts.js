import React, { Component } from 'react';

class Viewproducts extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.shopid}
                Viewproducts
            </div>
        );
    }
}

export default Viewproducts;