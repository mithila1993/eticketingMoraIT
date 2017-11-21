import { AppRegistry } from 'react-native';
import App from './App';
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
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
var config = {
    apiKey: "AIzaSyB3JKVnDtYMlz0qqqeB456_d8jZPPkL6S4",
    authDomain: "event-48918.firebaseapp.com",
    databaseURL: "https://event-48918.firebaseio.com",
    projectId: "event-48918", 
    storageBucket: "event-48918.appspot.com",
    messagingSenderId: "724603602751"
  };
  firebase.initializeApp(config);

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

AppRegistry.registerComponent('Project1', () => DrawerExample);
