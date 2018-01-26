import React, { Component } from 'react';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Recentshopowners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{}
        }
        this.approve = this.approve.bind(this);
        this.getRecentshopowners = this.getRecentshopowners.bind(this);
        this.delete = this.delete.bind(this);
    }

getRecentshopowners(){
    axios.post('http://localhost:3002/RecentshopownersOnAdmin', {
            
                })
                .then( (response) => {
                  this.setState({datas: response.data.data});
                })
                .catch( (error) => {
                this.setState({datas: undefined});
                });
}

componentDidMount() {
    this.getRecentshopowners();
}

    approve(value){
            console.log('button click',value);

            axios.post('http://localhost:3002/RecentshopownersApprove', {
                value : value,
              })
              .then(function (response) {
                NotificationManager.success('User Approved');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });
            
              this.getRecentshopowners();
    }

    delete(value){
        console.log('button click',value);

        axios.post('http://localhost:3002/RecentshopownersDelete', {
            value : value,
          })
          .then(function (response) {
            NotificationManager.error('User Deleted');
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
        
          this.getRecentshopowners();
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
                <td> <button className="btn btn-success" onClick={(e) => this.approve(description[0])}>Approve</button> <button className="btn btn-danger" onClick={(e) => this.delete(description[0])}>Delete</button></td>
                </tr>

                
                        )
                })
        }
        return (
            <div>
                <h1>Recent Shop owners</h1>
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
                { m}
                </tbody>
                        </table>
            </div>
        );
    }
}

export default Recentshopowners;