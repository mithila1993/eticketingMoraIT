import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Accountdetails from './Accountdetails';

class Account extends Component {
    constructor(props){
        super(props);
        this.state = {
          linknumb :1
        }
        this.signout = this.signout.bind(this);
        this.numfirst = this.numfirst.bind(this);
        this.numsecond = this.numsecond.bind(this);
        this.numthird = this.numthird.bind(this);
        this.numfourth = this.numfourth.bind(this);
        
      }
      //signout function
      signout(e){
        e.preventDefault(); 
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            console.log(error);

          });
          <script type="text/javascript">
          setTimeout(function(){
            window.location = ''
          },60000)
        </script>
          
      }
      //When click link1    
      numfirst(e){
          e.preventDefault();
          this.setState({
              linknumb:1
          })
      }

      numsecond(e){
        e.preventDefault();
        this.setState({
            linknumb:2
        })
    }

    numthird(e){
        e.preventDefault();
        this.setState({
            linknumb:3
        })
    }

    numfourth(e){
        e.preventDefault();
        this.setState({
            linknumb:4
        })
    }

  render() {
    var user = firebase.auth().currentUser;
    return (
      <div>
        <h1>Account</h1>
        <button className="btn btn-default" onClick={this.signout}>Logout</button>
        <div className="row">
        <p>
        {user.displayName}
        {user.email}
      
        </p>
        </div>
        <div className="row">
            <div className="col-md-4">
            <h1>My Account</h1>
            <ul className="nav nav-pills nav-stacked">
                <li><a href="#" onClick={this.numfirst}>Dashboard</a></li>
                <li><a href="#" onClick={this.numsecond}>Change Email</a></li>
                <li><a href="#" onClick={this.numthird}> Change Password</a></li>
            </ul>
            <h1></h1>
            <h1>Events</h1>
            <ul className="nav nav-pills nav-stacked">
                <li><a href="#" onClick={this.numfourth}>Create Events</a></li>
            </ul>
            </div>
            <div className="col-md-8">
                <Accountdetails callLink={this.state.linknumb}/>
            </div>
        </div>
      </div>
    );
  }
}

export default Account;