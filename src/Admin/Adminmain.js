import React, { Component } from 'react';
import '../App.css';
import * as firebase from 'firebase';
import Adminfront from './Adminfront';
import Recentcarparkowners from './Recent/Recentcarparkowners';
import Recenteventorganizers from './Recent/Recenteventorganizers';
import Approveeventorganizers from './Approve/Approveeventorganizers';
import Deleteeventorganizers from './Delete/Deleteeventorganizers';
import Recentshopowners from './Recent/Recentshopowners';
import Approvecarparkowners from './Approve/Approvecarparkowners';
import Approveshopowners from './Approve/Approveshopowners';
import Deletecarparkowners from './Delete/Deletecarparkowners';
import Deleteshopowners from './Delete/Deleteshopowners';
import Recentnormalusers from './Recent/Recentnormalusers';
import Approvenormalusers from './Approve/Approvenormalusers';
import Deletenormalusers from './Delete/Deletenormalusers';

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

        
    }
    
    

    
    render() {
       
        
        return (<div>
        <Router>
            <div>
            <div className="col-md-2 leftmenu " >
            <h1></h1>
            <p className="adminh">Recent Users</p>
                <ul className="nav nav-pills nav-stacked red">
                     <li><NavLink to="/Acc/Adminfront">Front</NavLink></li>
                     <li><NavLink to="/Acc/Recenteventorganizers">Event Organizers</NavLink></li>
                     <li><NavLink to="/Acc/Recentcarparkowners">Car Park Owners</NavLink></li>
                     <li><NavLink to="/Acc/Recentshopowners">Shop Owners</NavLink></li>
                     <li><NavLink to="/Acc/Recentnormalusers">Normal Users</NavLink></li>
                </ul>
                <p className="adminh">Approved Users</p>
                <ul className="nav nav-pills nav-stacked red">
                    <li><NavLink to="/Acc/Approveeventorganizers">Event Organizers</NavLink></li>
                    <li><NavLink to="/Acc/Approvecarparkowners">Car Park Owners</NavLink></li>
                    <li><NavLink to="/Acc/Approveshopowners">Shop Owners</NavLink></li>
                    <li><NavLink to="/Acc/Approvenormalusers">Normal Users</NavLink></li>
                     
                </ul>
                <p className="adminh">Deleted Users</p>
                <ul className="nav nav-pills nav-stacked red">
                    <li><NavLink to="/Acc/Deleteeventorganizers">Event Organizers</NavLink></li>
                    <li><NavLink to="/Acc/Deletecarparkowners">Car Park Owners</NavLink></li>
                    <li><NavLink to="/Acc/Deleteshopowners">Shop Owners</NavLink></li> 
                    <li><NavLink to="/Acc/Deletenormalusers">Normal Users</NavLink></li> 
                </ul>
                    {/* <li><NavLink to="/EventOrganizer">Event Organizers</NavLink></li>
                    <li><NavLink to="/Createevent">Create event</NavLink></li> */}
                    

                    
                
            </div>
                <div className="col-md-10">
                <Switch>
                <Route path="/Acc/Recentcarparkowners" component={Recentcarparkowners}/>
                <Route path="/Acc/Recenteventorganizers" component={Recenteventorganizers}/>
                <Route path="/Acc/Approveeventorganizers" component={Approveeventorganizers}/>
                <Route path="/Acc/Deleteeventorganizers" component={Deleteeventorganizers}/>
                <Route path="/Acc/Recentshopowners" component={Recentshopowners}/>
                <Route path="/Acc/Approvecarparkowners" component={Approvecarparkowners}/>
                <Route path="/Acc/Approveshopowners" component={Approveshopowners}/>
                <Route path="/Acc/Deletecarparkowners" component={Deletecarparkowners}/>
                <Route path="/Acc/Recentnormalusers" component={Recentnormalusers}/>
                <Route path="/Acc/Deleteshopowners" component={Deleteshopowners}/>
                <Route path="/Acc/Approvenormalusers" component={Approvenormalusers}/>
                <Route path="/Acc/Deletenormalusers" component={Deletenormalusers}/>
                <Route component={Adminfront}/>
                
                </Switch>
                
                </div>
                </div>
            </Router>


      </div> 
    );
    }
}

export default Adminmain;