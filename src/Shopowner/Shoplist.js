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
                <h1>Shop List</h1>
                <div className="col-md-12">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Venue</th>
                            <th scope="col">District</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    <tr className="table-hover">
                    <th scope="row" key={i}>{description[1].name}</th>
                            <td> {description[1].description}</td>
                            
                            <td><Link className="btn btn-info" to={`/Acc/Createproduct/${description[0]}`}>Add Products</Link>  </td>
                            <td><Link className="btn btn-success" to={`/Acc/Viewproducts/${description[0]}`}>View Products</Link></td>
                            </tr>
                    
                   
                          )
                  })}
                    </tbody>
                        </table>
                  </div>
            </div>
        );
    }
}

export default Shoplist;