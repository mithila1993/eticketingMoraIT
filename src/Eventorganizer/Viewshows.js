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
                <h1>View shows</h1>
                <div className="col-md-12">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Venue</th>
                            <th scope="col">District</th>
                            <th scope="col">Time</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    <tr className="table-hover">
                    <th scope="row" key={i}>{description[1].venue} </th>
                            <td> {description[1].district}</td>
                            <td> {description[1].time}</td>
                            <td><Link className="btn btn-info" to={`/Shows/${description[0]}`}>Update Shows</Link>   <Link className="btn btn-danger" to={`/Viewshows/${description[0]}`}>Delete Shows</Link></td>
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

export default Viewshows;