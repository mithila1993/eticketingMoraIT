import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';
  //import createBrowserHistory from 'history/createBrowserHistory'
import Register from './Entersite/Eventregister';
import Home from './Home';
import Login from './Login';
import logo from './img/logo.jpg';
import Accountmain from './Accountmain';
import Events from './Events';
import Eventdetails from './Events/Eventdetails';






class Header extends Component {
    render() {
        return (
            <div>
              
               <Router>
            
            <div className="container">
            <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="logo">
                <img src={logo} alt="logom" height="75px" width="200px"/>   
              </div> 
                {/* <a className="navbar-brand" href="#">Events</a> */}
              </div>
          
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="menulink"><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                  <li className="menulink"><NavLink activeClassName="activeNav" to="/Events">Events</NavLink></li>
                  <li className="menulink"><NavLink activeClassName="activeNav" to="/Register">Register</NavLink></li>
                  <li className="menulink"><NavLink activeClassName="activeNav" to="/Login">Account</NavLink></li>
                  <li className="menulink"><NavLink activeClassName="activeNav" to="/Accountmain">Account main</NavLink></li>
                  
                </ul>
              </div>
            </div>
          </nav>

      <Route exact path="/" component={Home} />
      <Route path="/Events" component={Events} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path="/Accountmain" component={Accountmain} />
      <Route path="/Eventdetails/:eventId" component={Eventdetails} />      
      

      {/* <Route path="/Login" component={Login} history={history}/>
      <Route path="/Contactus"/> */}
        
          </div>
      </Router> 
            </div>
        );
    }
}

export default Header;