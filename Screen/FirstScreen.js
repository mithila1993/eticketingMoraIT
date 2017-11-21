import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    
    Image
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import {  } from 'react-native-elements';

import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body,Button,Icon} from 'native-base';
import App from '../App';

export default class FirstScreen extends Component{
    static navigationOption ={
        tabBarLabel:'Screen 1',
        
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
            <Icon name='menu' color='white' />
            </Button>
            </Left>
            <Body>
            <Title>FirstScreen</Title>
          </Body>
          <Right>
              <Button>
                  <Icon name='cart'/>
              </Button> 
            </Right>     
        </Header>    
        <App/>
        </Container>
        );    
    }

}