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
import { Icon,Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body,Button} from 'native-base';
import Profile from '../Login/Profile';

export default class FourthScreen extends Component{
    static navigationOption ={
        tabBarLabel:'Screen 4',
        
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
            <Title>Account</Title>
          </Body>
        </Header>    
        <Profile/>
        </Container>
        );    
    }

}