/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View //
} from 'react-native';
import Splash from './Splash';
import Home from './Home';
import Login from './src/components/Login/Login';
import LoginForm from './src/components/Login/LoginForm';
import Component1 from './src/components/Component1';
import * as firebase from 'firebase';

//import NavigationExperimental from 'react-native-deprecated-custom-components';

var config=({
  apiKey: "AIzaSyAOp_CXPaAkcwARHQJbw7uPGHNnmX8rO_8",
  authDomain: "web-quickstart-66261.firebaseapp.com",
  databaseURL: "https://web-quickstart-66261.firebaseio.com",
  projectId: "web-quickstart-66261",
  storageBucket: "web-quickstart-66261.appspot.com",
  messagingSenderId: "304571954406"
});
firebase.initializeApp(config);


export default class myapp extends Component {
 
  render() {
    return (
    <Login/>
    //<Home/>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('myapp', () => myapp);
