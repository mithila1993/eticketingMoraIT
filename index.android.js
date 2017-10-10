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
  View,
  ListView,
  TouchableHighlight,
  Alert
  ,  AlarmManager
} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import Event from './Event';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import * as firebase from "firebase";
import StatusBar from './component/StatusBar';
import Login from './src/components/Login/Login';
import LoginForm from './src/components/Login/LoginForm';
import Home from './src/components/Home';

var config = {
  apiKey: "AIzaSyB3JKVnDtYMlz0qqqeB456_d8jZPPkL6S4",
  authDomain: "event-48918.firebaseapp.com",
  databaseURL: "https://event-48918.firebaseio.com",
  projectId: "event-48918",
  storageBucket: "event-48918.appspot.com",
  messagingSenderId: "724603602751"
};
firebase.initializeApp(config);

export default class myapp3 extends Component {

render() {
return (

<Component3/>
)
}
}
AppRegistry.registerComponent('myapp3', () => myapp3);
