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
            <div className="col-md-2 leftmenu">
                <ul className="nav nav-pills nav-stacked red">
                     <li><NavLink to="/Acc/Shoplist">Shop List</NavLink></li>
                    <li><NavLink to="/Acc/Createshop">Add Shops</NavLink></li>

                    

                    
                </ul>
            </div>
                <div className="col-md-10 rightcontent">
                <Switch>
                <Route path="/Acc/Shoplist" component={Shoplist}/>
                <Route path="/Acc/Createshop" component={Createshop}/>
                <Route path="/Acc/Createproduct/:shopid/" component={Createproduct}/>
                <Route path="/Acc/Viewproducts/:shopid/" component={Viewproducts}/>
                <Route component={Shoplist}/>
                
                </Switch>
                
                </div>
                </div>
            </Router>
        );
    }
}

export default Shopownermain;