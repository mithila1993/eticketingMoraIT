import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Route } from 'react-router';
import { Link, Redirect, withRouter } from 'react-router-dom'

class Recentevents extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            datas: {},
        }
        
    }

   

    componentDidMount() {
        var places=axios.get('http://localhost:3002/recentevents', {
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
                <h1>Recent Events</h1>
               { Object.entries(this.state.datas).map((description, i) => {  
                  return (

                  <div className="col-md-12" >
                 <div className="col-md-2"><img src={description[1].image} height="250px" width="170px"/></div>
                  <div className="col-md-10">
                  <h1 key={i}> {description[1].name} </h1>
                  <p align="justify"> {description[1].description}</p>
                  
                  <Link className="btn btn-default" to={`/Eventdetails/${description[0]}`}>More Details</Link>
                  
                  </div>
                  
                  </div>
                          )
                  })}
            </div>
            
            
        );
    }
}

export default Recentevents;