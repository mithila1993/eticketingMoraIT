import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

var id;

class Eventlist extends Component {
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
            <div className="container-new">
                <h1>Recent Events</h1>
               { Object.entries(this.state.datas).map((description, i) => {
                   id = description[0];  
                  return (
                    
                    <div>
                  <div>
                  <h1 key={i}> {description[1].event} </h1>
                  <p> {description[1].description}</p>
                  <button onClick={()=>this.props.eventmenu(2,description[0])}>View Details</button>
                  {/* id <p> {description[0]}</p> */}
                  </div>
                  </div>
                          )
                  })}
            </div>
        );
    }
}

export default Eventlist;