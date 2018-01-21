import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import '../App.css';

class Viewshows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{}
        }

    }

    // Dispaly Shows

    componentDidMount() {
        axios.post('http://localhost:3002/displayShowsOrganizer', {
            eventid: this.props.match.params.eventId,
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
                Viewshows
                <h1>View shows</h1>
                <div>{ Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <div className="col-md-12" >
                 
                  <div className="col-md-2">
                  </div>
                  <div className="col-md-2"><p> {description[1].venue}</p></div>
                  <div className="col-md-2"><p> {description[1].district}</p></div>
                  <div className="col-md-2"><p> {description[1].time}</p></div>
        
                  
                  <div className="col-md-2">
                  {/* <Link className="btn btn-default" to={`/Seats/${this.props.match.params.eventId}/${description[0]}`}>Seat Allocations</Link> */}
                  </div>
                  </div>
                  
                  </div>

                  </div>
                  
                          )
                  })}</div>
            </div>
        );
    }
}

export default Viewshows;