import React, { Component } from 'react';
import axios from 'axios';

class Approveeventorganizers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{}
        }
        this.getApproveOrganizers = this.getApproveOrganizers.bind(this);
        this.delete = this.delete.bind(this);
    }


    getApproveOrganizers(){
        axios.post('http://localhost:3002/approveEventOrganizersOnAdmin', {
                
                    })
                    .then( (response) => {
                      this.setState({datas: response.data.data});
                    })
                    .catch( (error) => {
                      console.log("event error",error);
                    });
    }
    
    componentDidMount() {
        this.getApproveOrganizers();
    }

    delete(value){
        console.log('button click',value);

        axios.post('http://localhost:3002/recentEventOrganizersDelete', {
            value : value,
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
        
          this.getApproveOrganizers();
}

    render() {
        return (
            <div>
                <h1>Approved Event Organizers</h1>
                {console.log(this.state.datas)}
                { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <h1 key={i}> {description[1].displayName} </h1>
                  <p> {description[1].email}</p>
                  <p> {description[0]}</p>
                  <button onClick={(e) => this.delete(description[0])}>Delete</button>
                  </div>
                  </div>
                          )
                  })}

            </div>
        );
    }
}

export default Approveeventorganizers;