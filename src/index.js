import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
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
<Header/>,
document.getElementById('root'));
registerServiceWorker();
