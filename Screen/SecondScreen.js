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
import Login from '../Login/Login';

export default class SecondScreen extends Component{
    static navigationOption ={
        tabBarLabel:'Screen 2',
        drawerIcon: ({tintColor})=>{
            return (
                <Container>
                    <Item>
                         <Icon name='home' />
                    </Item>
                </Container>    
            );
        }
    }
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
            <Title>Login</Title>
          </Body>
        </Header>  
        <Login/>    
        </Container> 
        
        );
    }

}