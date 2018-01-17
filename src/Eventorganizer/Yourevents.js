import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import {
    Link
  } from 'react-router-dom';
  import axios from 'axios';

class Yourevents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            showdeatils :0,
            datas: {}
        }
    }

componentDidMount() {
        axios.post('http://localhost:3002/displayEventsOrganizer', {
            eventId: this.props.match.params.eventId,
          })
          .then( (response) => {
            
            this.setState({datas: response.data.data});
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }    

    render() {
        return (
            <div>
                <h1>Your Events</h1>
            { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <div className="col-md-12" >
                 
                  <div className="col-md-4" >
                  <h1 key={i}> {description[1].name} </h1>
                  </div>
                  <div className="col-md-6" >
                  <p> {description[1].description}</p>
                  </div>
                  <div className="col-md-2" >
                  <Link className="btn btn-default" to={`/Shows/${description[0]}`}>Add Shows</Link>
                  </div>
                  
                  </div>

                  </div>
                  </div>
                          )
                  })}
            </div>
        );
    }
}

export default Yourevents;