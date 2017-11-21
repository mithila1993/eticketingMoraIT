/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import * as firebase from "firebase";
import LoginForm from './Login/LoginForm';
import Login from './Login/Login';
import Register from './Login/Register';
import RegisterForm from './Login/RegisterForm';
import Profile from './Login/Profile';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
import FourthScreen from './Screen/FourthScreen';
import Component1 from './Home/Component1';
import Event from './Events/Component2';
import MainScreen from './MainScreen';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';

// const Navigation = StackNavigator({
//   Component1: {screen:Component1},
//   Event:{screen:Event},
//   Login: {screen: Login } ,
//   Register: { screen: Register},
//   Profile: { screen: Profile},
//   //Component1: {screen:Component1}
  
// });

var MainScreenNavigator = TabNavigator({
  Tab1: {screen: Tab1},
  Tab2: {screen: Tab2},
  Tab3: {screen: Tab3},
  Tab4: {screen: Tab4},
},
{
  tabBarPosition: 'Bottom',
  swipeEnabled: true,

});

MainScreenNavigator.navigationOptions = {
  title: 'Top example'
};

// const DrawerExample = DrawerNavigator(
// {
//     Home:{
//       screen:FirstScreen,
//     },
//     Login:{
//       screen:SecondScreen,
//     },
//     Register:{
//       screen:ThirdScreen,
//     },
//     Account:{
//       screen:FourthScreen,
//     },
    
//   },  
//     {
//       initialRouteName:'Home',
//       drawerPosition:'left',
      
//     }
// );
export default MainScreenNavigator ;