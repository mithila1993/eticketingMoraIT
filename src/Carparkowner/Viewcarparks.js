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
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <h1 key={i}> {description[1].name} </h1>
                  <p> {description[1].description}</p>
                  <p> {description[0]}</p>
                  <Link className="btn btn-default" to={`/Addcarparkdate/${description[0]}`}>Add Car Park Date</Link>
                  <Link className="btn btn-default" to={`/Viewcarparkdate/${description[0]}`}>View Car Park Date</Link>


                  </div>
                  </div>
                          )
                  })}

            </div>
        );
    }
}

export default Viewcarparks;