import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';
  //import createBrowserHistory from 'history/createBrowserHistory'
  import Register from './Register';
  import Home from './Home';
  import Login from './Login';
  import * as firebase from 'firebase';

  

  var config = {
    apiKey: "AIzaSyCsitGuoGQA-yDnLD38vb-awoUgzuy0i8c",
    authDomain: "react-note-a8f4e.firebaseapp.com",
    databaseURL: "https://react-note-a8f4e.firebaseio.com",
    projectId: "react-note-a8f4e",
    storageBucket: "react-note-a8f4e.appspot.com",
    messagingSenderId: "19145031693"
  };
  firebase.initializeApp(config);


//const history = createBrowserHistory()

ReactDOM.render(
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
                <a className="navbar-brand" href="#">Events</a>
              </div>
          
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                  <li><NavLink activeClassName="activeNav" to="/Register">Register</NavLink></li>
                  <li><NavLink activeClassName="activeNav" to="/Login">Account</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>

      <Route exact path="/" component={Home} />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      {/* <Route path="/Login" component={Login} history={history}/>
      <Route path="/Contactus"/> */}
      
          </div>
      </Router>,
document.getElementById('root'));
registerServiceWorker();
