import React, { Component } from 'react';
import axios from 'axios';

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
                  console.log("event error",error);
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
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
        
          this.getRecentshopowners();
}



    
    render() {
        return (
            <div>
                <h1>Recent Shop owners</h1>
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <h1 key={i}> {description[1].displayName} </h1>
                  <p> {description[1].email}</p>
                  <p> {description[0]}</p>
                  <button onClick={(e) => this.approve(description[0])}>Approve</button>
                  <button onClick={(e) => this.delete(description[0])}>Delete</button>
                  </div>
                  </div>
                          )
                  })}

            </div>
        );
    }
}

export default Recentshopowners;