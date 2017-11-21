import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ToolbarAndroid,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, {Component} from 'react';
import Login from './Login';
import * as firebase from 'firebase';

import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Button,Card,Icon} from 'native-base';
// Styles specific to the account page
const styles = StyleSheet.create({
  email_container: {
    padding: 20
  },
  email_text: {
    fontSize: 18
  },
  primaryButton:{
   
  },
  buttonContainer:{
  backgroundColor: 'rgba(255,255,255,0.4)',
  paddingVertical: 10,
  marginBottom:10
},
body:{
  
}
});

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentWillMount() {
    // get the current user from firebase
    const userData = firebase.auth().currentUser;
    if(userData){
    this.setState({
      user: userData,
      loading: false
    });
  }else{
    console.log('no users');
    alert('Please Login');
  }

  }

  render() {
    // If we are loading then we display the indicator, if the account is null and we are not loading
    // Then we display nothing. If the account is not null then we display the account info.
    const content = this.state.loading ? <ActivityIndicator size="large"/> :
       this.state.user &&
        <View style={styles.body}>
          <View style={styles.email_container}>
          <Icon name='person'>
            <Text style={styles.email_text}>   {this.state.user.email}</Text>
            </Icon>
          </View>
          
          <TouchableOpacity onPress={this.logout.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changeEmail.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Change email</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.changePass.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.deleteAccount.bind(this)} style={styles.buttonContainer}>
            <Text style={styles.primaryButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      ;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          {content}
        </View>
      </View>
    );
  }

  logout() {
    // logout, once that is complete, return the user to the login screen.
    firebase.auth().signOut().then(() => {
      alert('Successfully Logged out!');
      // this.setState({
      //   user:''
			//   });
      // this.props.navigator.push({
      //   component: Login
      // });
    })
    this.setState({
        user:''
			  });
  }
  changeEmail() {
    var user = firebase.auth().currentUser;
    user.updateEmail("s.manthishamika@gmail.com")
    .then(function() {
      console.log('updated successfully');
      user.sendEmailVerification().then(function() {
        console.log('email is sent');
        // Email sent.
      }).catch(function(error) {
        // An error happened.
        console.log(error);
      });
      // Update successful.
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
   
  }
  changePass() {
    var user = firebase.auth().currentUser;
    var newPassword = '654321';
    var auth = firebase.auth();
    var emailAddress = "s.manthishamika@gmail.com";
    
    user.updatePassword(newPassword).then(function() {
      console.log('password changed');
      auth.sendPasswordResetEmail(emailAddress).then(function() {
        console.log('password email is sent');
        // Email sent.
      }).catch(function(error) {
        console.log(error);
        // An error happened.
      });
      // Update successful.
    }).catch(function(error) {
      console.log(error);
      // An error happened.
    });
   
  }
  deleteAccount() {
    var user = firebase.auth().currentUser;
    
    user.delete().then(function() {
      console.log('Account is deleted');
      // User deleted.
    }).catch(function(error) {
      console.log(error);
      // An error happened.
    });
   
  }
}

AppRegistry.registerComponent('Profile', () => Profile);