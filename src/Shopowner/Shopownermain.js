import React, { Component } from 'react';
import Shopownerfront from './Shopownerfront';
import Createshop from './Createshop';
import Shoplist from './Shoplist';
import Createproduct from './Createproduct';
import Viewproducts from './Viewproducts';

import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
  } from 'react-router-dom'
  import { Switch} from 'react-router'

class Shopownermain extends Component {
    render() {
        return (
            <Router>
            <div>
            <div className="col-md-2">
                <ul>
                     <li><NavLink to="/Shopownerfront">Front</NavLink></li>
                     <li><NavLink to="/Shoplist">Shop list</NavLink></li>
                    <li><NavLink to="/Createshop">Add Shops</NavLink></li>

                    

                    
                </ul>
            </div>
                <div className="col-md-10">
                <Switch>
                <Route path="/Shoplist" component={Shoplist}/>
                <Route path="/Createshop" component={Createshop}/>
                <Route path="/Createproduct/:shopid/" component={Createproduct}/>
                <Route path="/Viewproducts/:shopid/" component={Viewproducts}/>
                <Route component={Shopownerfront}/>
                
                </Switch>
                
                </div>
                </div>
            </Router>
        );
    }
}

export default Shopownermain;