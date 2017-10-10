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
import Home from './Home';
import Action from './Action';
import Event from './Event';
import ToDrawer from './ToDrawer';
import Component1 from './Component1';
import Component2 from './Component2';
import * as firebase from "firebase";
import StatusBar from './component/StatusBar';
import ListItem from './component/ListItem';
import ActionButton from './component/ActionButton';


export default class Component3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = firebase.database().ref('event');
    this.listenForItems(this.itemsRef);
    console.ignoredYellowBox = [
    'Setting a timer'
];
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val(),
         _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

 

render() {
return (
<View >

<StatusBar title="Events" />

<ListView 
dataSource={this.state.dataSource}
renderRow={this.renderRow.bind(this)}
enableEmptySections={true}    //if there are no any title match to given title
/>

</View>
)
}
        renderRow(items){
            console.log(items.title);
         
          return(
        <Event items={items}/>
                 )
        }
        
} 

AppRegistry.registerComponent('Component3', () => Component3);
