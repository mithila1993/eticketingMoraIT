import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View ,//
  ListView
} from 'react-native';

const users=[
  {name:'enrique live in concert'},
  {name:'sonu nigum live in concert'},
  {name:'pitbull live in concert'},
  {name:'mark anthony live in concert'}
]

export default class Component2 extends Component {
  
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          userDataSource: ds.cloneWithRows(users),
        };
      } 
      renderRow(user, sectionId, rowId, highlightRow){
        return(
            <View>
                <Text>{user.name}</Text>
            </View>
        )
      }
  render() {
    return (
        <ListView
            dataSource={this.state.userDataSource}
            renderRow={this.renderRow.bind(this)}
        />
    
    );
  }
}

AppRegistry.registerComponent('Component2', () => Component2);
