import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Shoplist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},   
        }
    }




componentWillMount() {
    var places=axios.post('http://localhost:3002/receiveShops', {
            
                })
                .then( (response) => {
                  this.setState({datas: response.data.data});
                })
                .catch( (error) => {
                  console.log("event error",error);
                });

}

    render() {
        return (
            <div>
                <h1>Shoplist</h1>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <h1 key={i}> {description[1].name} </h1>
                  <p> {description[1].description}</p>
                  <p> {description[0]}</p>
                  <Link className="btn btn-default" to={`/Createproduct/${description[0]}`}>Add Products</Link>
                  <Link className="btn btn-default" to={`/Viewproducts/${description[0]}`}>View Products</Link>


                  </div>
                  </div>
                          )
                  })}

            </div>
        );
    }
}

export default Shoplist;