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
            datas: {},
            getid:{}
        }
    }

componentDidMount() {
    axios.post('http://localhost:3002/getId', {
            email:  firebase.auth().currentUser.email,
        })
        .then( (response) => {
        this.setState({getid: response.data},()=>{
            axios.post('http://localhost:3002/displayEventsOrganizer', {
                eventorganizerid:this.state.getid
              })
              .then( (response) => {
                
                this.setState({datas: response.data.data});
                
              })
              .catch(function (error) {
                console.log("event error",error);
              });
        });
            
        })
        .catch( (error) => {
        console.log("choose user",error);
        });

        
    }    

    render() {
        return (
            <div>
                <h1>Your Events</h1>
                <div className="col-md-12">
                        <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                
            { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                        <tr className="table-hover">
                    <th scope="row" key={i}>{description[1].name} </th>
                            <td> {description[1].description}</td>
                            <td><Link className="btn btn-info" to={`/Acc/Shows/${description[0]}`}>Add Shows</Link></td>
                            <td><Link className="btn btn-success" to={`/Acc/Viewshows/${description[0]}`}>View Shows</Link></td>
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

export default Yourevents;