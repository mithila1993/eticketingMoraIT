import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Viewcarparks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},   
        }
    }
  


    componentWillMount() {
        var places=axios.post('http://localhost:3002/receiveCarParks', {
                
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
                <h1>Car Parks</h1>
                <div className="col-md-12">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Car Parks</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    <tr className="table-hover">
                    <th scope="row" key={i}>{description[1].name} </th>
                            <td><Link className="btn btn-info" to={`/Addcarparkdate/${description[0]}`}>Add Car Park Date</Link>  <Link className="btn btn-success" to={`/Viewcarparkdate/${description[0]}`}>View Car Park Date</Link></td>
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

export default Viewcarparks;