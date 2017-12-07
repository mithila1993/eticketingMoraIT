import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as firebase from 'firebase';


class Recentevents extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas: {
              
            },
        }}
    

    render() {

        var places=axios.post('http://localhost:3002/recentevents', {
            
                })
                .then( (response) => {
                  this.setState({datas: response.data.data});
                })
                .catch( (error) => {
                  console.log("event error",error);
                });
               
                

        return (
            <div>
                <h1>Recent Events</h1>
               { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <h1 key={i}> {description[1].event} </h1>
                  <p> {description[1].description}</p>
                  <p> {description[0]}</p>
                  </div>
                  </div>
                          )
                  })}
            </div>
        );
    }
}

export default Recentevents;