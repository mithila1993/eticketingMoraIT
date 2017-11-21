import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
import FourthScreen from './Screen/FourthScreen';

const DrawerExample = DrawerNavigator(
    {
        Home:{
          screen:FirstScreen,
        },
        Login:{
          screen:SecondScreen,
        },
        Register:{
          screen:ThirdScreen,
        },
        Account:{
          screen:FourthScreen,
        },
        
      },  
        {
          initialRouteName:'Home',
          drawerPosition:'left',
          
        }
    );
    export default DrawerExample ;