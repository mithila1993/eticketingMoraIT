import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Thumbnail,Card,CardItem } from 'native-base';
import Movie from '../Movie';

export default class Tab3 extends Component {
    static navigationOptions = {
        tabBarLabel: 'Movies'
    }
    render() {
      return (
        <Container style={styles.container}>
        <Movie/>
 </Container>
);
}
}
const styles = StyleSheet.create({



});