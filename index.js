import React, { Component } from 'react';
import { AppRegistry, ScrollView,View,Text,StyleSheet,Image } from 'react-native';
import App from './App';
import Test1 from './Test1';
// import LoginForm from './Login/LoginForm';
// import Login from './Login/Login';
// import Register from './Login/Register';
// import RegisterForm from './Login/RegisterForm';
 import * as firebase from "firebase";
// import Profile from './Login/Profile';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ThirdScreen from './Screen/ThirdScreen';
import FourthScreen from './Screen/FourthScreen';
import Json from './Home/Json';
import Anim from './Home/Anim';
import Profile from './Login/Profile';
import LoginForm from './Login/LoginForm';
import DrawerPage from './DrawerPage';
import Component1 from './Home/Component1';

//import SeatPlan from './SeatPlan/SeatPlan';
import { StackNavigator,TabNavigator,DrawerNavigator,DrawerItems } from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
var config = {
  apiKey: "AIzaSyCsitGuoGQA-yDnLD38vb-awoUgzuy0i8c",
  authDomain: "react-note-a8f4e.firebaseapp.com",
  databaseURL: "https://react-note-a8f4e.firebaseio.com",
  projectId: "react-note-a8f4e",
  storageBucket: "react-note-a8f4e.appspot.com",
  messagingSenderId: "19145031693"

  };
  firebase.initializeApp(config);

  const CustomDrawerContentComponent = (props)=>(
    <Container>
      <Header style={{height:220,backgroundColor:'#000f28'}}>
        <Body>
          <Image 
          style={styles.drawerImage}
          source={require('./Login/headerbg.jpg')} />
          </Body>
        </Header>
        <Content>
          <DrawerItems {...props}/>
          </Content>
      </Container>
  )

  const DrawerExample = DrawerNavigator(
    {
      
        Home:{ screen:FirstScreen,},
        Login:{screen:SecondScreen,},
        Register:{screen:ThirdScreen,},
        Account:{screen:FourthScreen,},
        
      },  
      { initialRouteName:'Home',
        contentComponent:CustomDrawerContentComponent,
        drawerOpenRoute:'DrawerOpen',
        drawerCloseRoute:'DrawerClose',
        drawerToggleRoute:'DrawerToggle'
      },
        {
          //contentComponent:props=><DrawerPage{...props}/>
          // initialRouteName:"Home"
        }
    );
    const MainNavigation = StackNavigator({
      Home:{ screen:DrawerExample,},
      LoginForm: {screen: SecondScreen } ,
      Profile: { screen: FourthScreen},
      RegisterForm: { screen: ThirdScreen},
  },
  
  );
  const styles = StyleSheet.create({
    drawerImage:{
      flex:1,
      height:220,
      width:null,
      alignSelf:'stretch',
      
      //borderRadius:75
    }
  })

AppRegistry.registerComponent('Project1', () => DrawerExample);
