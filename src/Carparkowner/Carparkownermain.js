import React, { Component } from 'react';
import Carparkownerfront from './Carparkownerfront';
import Createcarpark from './Createcarpark';
import Viewcarparks from './Viewcarparks';
import Addcarparkdate from './Addcarparkdate';
import Viewcarparkdate from './Viewcarparkdate';
import EditCarParkDate from './EditCarParkDate';



import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
  } from 'react-router-dom'
  import { Switch} from 'react-router'

class Carparkownermain extends Component {
    render() {
        return (
            <Router>
            <div>
            <div className="col-md-2 leftmenu ">
                <ul className="nav nav-pills nav-stacked red">

                     <li><NavLink to="/Acc/Carparkownerfront">Front</NavLink></li>
                    <li><NavLink to="/Acc/Createcarpark">Create Car Park</NavLink></li>
                    <li><NavLink to="/Acc/Viewcarparks">View Car Parks</NavLink></li>
                    
                    
                    

                    
                </ul>
            </div>
                <div className="col-md-10 rightcontent">
                <Switch>
                <Route path="/Acc/Createcarpark" component={Createcarpark}/>
                <Route path="/Acc/Viewcarparks" component={Viewcarparks}/>
                <Route path="/Acc/Addcarparkdate/:carparkid/" component={Addcarparkdate}/>
                <Route path="/Acc/Viewcarparkdate/:carparkid/" component={Viewcarparkdate}/>
                <Route path="/Acc/EditCarParkDate/:carparkid/:carparkdateid/" component={EditCarParkDate}/>
                {/* <Route path="/Createevent" component={Createevent}/> */}
                {/* <Route path="/Shows/:eventId/" component={Shows}/> */}
                
                <Route component={Carparkownerfront}/>
                
                </Switch>
                
                </div>
                </div>
            </Router>
        );
    }
}

export default Carparkownermain;