import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    
    Image
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import { Icon } from 'react-native-elements';
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body,Button,Icon} from 'native-base';
import Register from '../Login/Register';

export default class ThirdScreen extends Component{
    static navigationOption ={
        tabBarLabel:'Screen 3',
        
        drawerIcon: ({ tintColor }) => {
            return(
                <MaterialIcons
                    name='account-circle'
                    style={{color:tintColor}}>
                    
                </MaterialIcons>
        );
    }
    };
    render(){
        return (
        <Container> 
        <Header style={{backgroundColor:'#27045b'}}>
        <Left>    
        <Button transparent
            onPress={()=>this.props.navigation.navigate('DrawerOpen')}
            title='Open DrawerNavigator'>
            <Icon name='menu' />
            </Button>
            </Left>
            <Body>
            <Title>Register</Title>
          </Body>
        </Header>    
        <Register/>    
        </Container>
        );    
    }

}