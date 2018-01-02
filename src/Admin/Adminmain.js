import React, { Component } from 'react';
import '../App.css';
import * as firebase from 'firebase';
import Adminfront from './Adminfront';
import Recentcarparkowners from './Recent/Recentcarparkowners';
import Recenteventorganizers from './Recent/Recenteventorganizers';
import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
  } from 'react-router-dom'
  import { Switch} from 'react-router'



var user;
var adminMenuDisplay=1;

class Adminmain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adminMenuNum:0,
            locationId:0
        }

        // this.adminMenu = this.adminMenu.bind(this);
    }
    
    // adminMenu(adminMenuNum, locationId, locationName){
        
    //     console.log('normal button');

    //     this.setState({
    //         locationId :locationId,
    //         adminMenuNum:adminMenuNum,
    //         locationName :locationName
    //     });
    // }

    
    render() {
        // if(this.state.adminMenuNum===4){
        //     adminMenuDisplay = <Venuelocations adminMenu={this.adminMenu}/>
        // }if(this.state.adminMenuNum===7){
        //     adminMenuDisplay = <Halls adminMenu={this.adminMenu} locationId={this.state.locationId}
        //     locationName ={this.state.locationName}
        //     />
        // }

        
        return (<div>
        <Router>
            <div>
            <div className="col-md-2">
            <h1></h1>
            <h1>Recent Users</h1>
                <ul>
                     <li><NavLink to="/Adminfront">Front</NavLink></li>
                     <li><NavLink to="/Recenteventorganizers">Event Organizers</NavLink></li>
                     <li><NavLink to="/Recentcarparkowners">Car Park Owners</NavLink></li>
                </ul>
            <h1>Approved Users</h1>
                <ul>
                    <li><NavLink to="/Recenteventorganizers">Event Organizers</NavLink></li>
                     <li><NavLink to="/Recentcarparkowners">Car Park Owners</NavLink></li>
                </ul>
                    {/* <li><NavLink to="/EventOrganizer">Event Organizers</NavLink></li>
                    <li><NavLink to="/Createevent">Create event</NavLink></li> */}
                    

                    
                
            </div>
                <div className="col-md-10">
                <Switch>
                <Route path="/Recentcarparkowners" component={Recentcarparkowners}/>
                <Route path="/Recenteventorganizers" component={Recenteventorganizers}/>
                <Route component={Adminfront}/>
                
                </Switch>
                
                </div>
                </div>
            </Router>


        
        {/* <div className="row">
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
        </div>*/}
      </div> 
    );
    }
}

export default Adminmain;