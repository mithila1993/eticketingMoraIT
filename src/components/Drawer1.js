import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View //
} from 'react-native';
import Drawer from 'react-native-drawer'
import Component1 from './Component1';
import Splash from '../../Splash';

export default class Drawer1 extends Component {  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<Component1/>}
        >
        <Splash/>
      </Drawer>
    )
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
AppRegistry.registerComponent('Drawer1', () => Drawer1);
