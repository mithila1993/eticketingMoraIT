import React, { Component } from 'react';
import '../App.css';
import * as firebase from 'firebase';
import Venuelocations from './Venuelocations';
import Halls from './Halls';


var user;
var adminMenuDisplay=1;

class Adminmain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminMenuNum:0,
            locationId:0
        }

        this.adminMenu = this.adminMenu.bind(this);
    }
    
    adminMenu(adminMenuNum, locationId, locationName){
        
        console.log('normal button');

        this.setState({
            locationId :locationId,
            adminMenuNum:adminMenuNum,
            locationName :locationName
        });
    }

    
    render() {
        if(this.state.adminMenuNum===4){
            adminMenuDisplay = <Venuelocations adminMenu={this.adminMenu}/>
        }if(this.state.adminMenuNum===7){
            adminMenuDisplay = <Halls adminMenu={this.adminMenu} locationId={this.state.locationId}
            locationName ={this.state.locationName}
            />
        }

        
        return (<div>
        <h1>Account</h1>
        
        <div className="row">
            <div className="col-md-2">
            <h1>My Account</h1>
            <ul className="nav nav-pills nav-stacked">
                <li><a href="#" onClick={this.adminMenu.bind(this,1)}>Dashboard</a></li>
                <li><a href="#" onClick={this.adminMenu.bind(this,2)}>Change Email</a></li>
                <li><a href="#" onClick={this.adminMenu.bind(this,3)}> Change Password</a></li>
            </ul>
            <h1></h1>
            <h1>Events</h1>
            <ul className="nav nav-pills nav-stacked">
                <li><a href="#" onClick={this.adminMenu.bind(this,4)}>Venue Locations</a></li>
                <li><a href="#" onClick={this.adminMenu.bind(this,5)}>Upload Photo</a></li>
                <li><a href="#" onClick={this.adminMenu.bind(this,6)}>My Events</a></li>
            </ul>
            </div>
            <div className="col-md-10">
                {this.state.adminMenuNum}
                {adminMenuDisplay}
                
                
            </div>
        </div>
      </div>
    );
    }
}

export default Adminmain;