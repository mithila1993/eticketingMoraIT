import React, { Component } from 'react';
import Createevent from './Createevent';
import Eventorganizerfront from './Eventorganizerfront';
import Seatallocation from './Seatallocation';
import Shows from './Shows';
import Seats from './Seats';
import Foods from './Foods';
import Yourevents from './Yourevents';
import Viewshows from './Viewshows';
import Recentorders from './Recentorders';


import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
  } from 'react-router-dom'
  import { Switch} from 'react-router'

class Eventorganizermain extends Component {
    render() {
        return (
            <Router>
            <div>
            <div className="col-md-2 leftmenu ">
            
                <ul className="nav nav-pills nav-stacked red">
                     <li><NavLink to="/Acc/Eventorganizerfront">Front</NavLink></li>
                     <li><NavLink to="/Acc/Yourevents">Your Events</NavLink></li>
                     <li><NavLink to="/Acc/Createevent">Create Event</NavLink></li> 
                    <li><NavLink to="/Acc/seatallocation">Design Seat Planning</NavLink></li>
                    <li><NavLink to="/Acc/Recentorders">Recent Orders</NavLink></li>

                </ul>

                

                
            </div>
                <div className="col-md-10 rightcontent">
                <div className="">
                <Switch>
                <Route path="/Acc/seatallocation" component={Seatallocation}/>
                <Route path="/Acc/Createevent" component={Createevent}/>
                <Route path="/Acc/Shows/:eventId/" component={Shows}/>
                <Route path="/Acc/Viewshows/:eventId/" component={Viewshows}/>
                <Route path="/Acc/Seatallocation/:eventId/:showid" component={Seatallocation} />
                <Route path="/Acc/Seats/:eventid/:showid" component={Seats} />
                <Route path="/Acc/Foods/:eventid/:showid" component={Foods} />
                <Route path="/Acc/Yourevents" component={Yourevents}/>
                <Route path="/Acc/Recentorders" component={Recentorders}/>
                <Route component={Eventorganizerfront}/>
                
                </Switch>
                
                

                </div>
                </div>
                </div>
            </Router>
        );
    }
}

export default Eventorganizermain;