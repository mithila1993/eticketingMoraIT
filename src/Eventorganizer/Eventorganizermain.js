import React, { Component } from 'react';
import Createevent from './Createevent';
import Eventorganizerfront from './Eventorganizerfront';
import Seatallocation from './Seatallocation';
import Shows from './Shows';
import Seats from './Seats';
import Foods from './Foods';


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
            <div className="col-md-2">
                <ul>
                     <li><NavLink to="/Eventorganizerfront">Front</NavLink></li>
                    <li><NavLink to="/seatallocation">Seat Allocation</NavLink></li>
                    <li><NavLink to="/Createevent">Create event</NavLink></li>
                    

                    
                </ul>
            </div>
                <div className="col-md-10">
                <Switch>
                <Route path="/seatallocation" component={Seatallocation}/>
                <Route path="/Createevent" component={Createevent}/>
                <Route path="/Shows/:eventId/" component={Shows}/>
                <Route path="/Seatallocation/:eventId/:showid" component={Seatallocation} />
                <Route path="/Seats/:eventid/:showid" component={Seats} />
                <Route path="/Foods/:eventid/:showid" component={Foods} />
                <Route component={Eventorganizerfront}/>
                
                </Switch>
                
                </div>
                </div>
            </Router>
        );
    }
}

export default Eventorganizermain;