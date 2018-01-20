import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Viewcarparkdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},   
        }
    } 

    componentWillMount() {
        var places=axios.post('http://localhost:3002/receiveCarParkDates', {
            carparkid: this.props.match.params.carparkid,
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
                {this.props.match.params.carparkid}
                <h1>View car park date</h1>
                
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div >
                  <h1 key={i}> {description[1].date} </h1>
                  <p> {description[0]}</p>
                  <Link className="btn btn-default" to={`/EditCarParkDate/${this.props.match.params.carparkid}/${description[0]}`}>Edit Car Park Date</Link>
                  


                  </div>
                  </div>
                          )
                  })}
            </div>
        );
    }
}

export default Viewcarparkdate;