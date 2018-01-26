import React, { Component } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Deleteeventorganizers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{}
        }
        this.approve = this.approve.bind(this);
        this.getDeleteOrganizers = this.getDeleteOrganizers.bind(this);
    }

getDeleteOrganizers(){
    axios.post('http://localhost:3002/deleteEventOrganizersOnAdmin', {
            
                })
                .then( (response) => {
                  this.setState({datas: response.data.data});
                })
                .catch( (error) => {
                    this.setState({datas: undefined});
                });
}

componentDidMount() {
    this.getDeleteOrganizers();
}

    approve(value){
            console.log('button click',value);

            axios.post('http://localhost:3002/recentEventOrganizersApprove', {
                value : value,
              })
              .then(function (response) {
                NotificationManager.success('User Approved');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
            
              this.getDeleteOrganizers();
    }
    
    render() {
        if(this.state.datas===undefined){
            var m = "No Users"
        }else{
            var m =  Object.entries(this.state.datas).map((description, i) => {  
                return (
                  
                  <tr className="table-hover">
                <th scope="row" key={i}>{description[0]} </th>
                <td> {description[1].displayName}</td> 
                <td> {description[1].email}</td>
                <td> <button className="btn btn-success" onClick={(e) => this.approve(description[0])}>Approve</button> </td>
                </tr>

                
                        )
                })
        }
        return (
            <div>
                <h1>Deleted Event Organizers</h1>
                <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                {m}
                </tbody>
                        </table>

            </div>
        );
    }
}

export default Deleteeventorganizers;