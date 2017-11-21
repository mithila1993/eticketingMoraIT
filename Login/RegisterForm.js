import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage,
	navigator,ActivityIndicator,ToolbarAndroid,KeyboardAvoidingView,StatusBar } from 'react-native';
import * as firebase from 'firebase';
import Login from './Login';
import { StackNavigator,} from 'react-navigation';

export default class LoginForm extends Component{
    static navigationOption = {
        title:'Register'
    }
    constructor(props){
		super(props);
		
		this.state = {
			loading: false,
			email:'',
            pass:'',
            pass2:'',
			id:this.props.id
			
		};
		this.signup=this.signup.bind(this);
}
    render(){
        const content = this.state.loading ? <ActivityIndicator size="large"/> :
        <View behavior="padding" style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    returnKeyType="next"
                    onSubmitEditing={()=>this.passwordInput.focus()}
                    onChangeText={(email)=>this.setState({email})}
                    value={this.state.email}
                    keyboardType='email-address'
                    style={styles.input}/>
        <TextInput 
                    placeholder="Password" 
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    returnKeyType="next"
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={()=>this.passwordInput1.focus()}
                    onChangeText={(pass)=>this.setState({pass})}
                    value={this.state.pass}
                    style={styles.input}/>
        <TextInput 
                    placeholder="Confirm Password" 
                    secureTextEntry
                    placeholderTextColor="rgba(255,255,255,0.7)" 
                    returnKeyType="go"
                    ref={(input) => this.passwordInput1 = input}
                    onChangeText={(pass2)=>this.setState({pass2})}
                    value={this.state.pass2}
                    style={styles.input}/>    
        
        <TouchableOpacity onPress={this.signup} style={styles.buttonContainer}>
        <Text  style={styles.buttonText}>SIGNUP</Text>    
        </TouchableOpacity>
        </View>
        return(
            <View>
                {content}
            </View>    
        );

    }
    async signup() {
        if(this.state.pass===this.state.pass2){
		try {
			this.setState({
				loading:true
			});
			await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
			 		.then((userData) => {
                            // this.props.navigation.navigate('Login')
						    alert('Your account was created!');
					 })
			console.log('Signed up');
			this.setState({
				// Clear out the fields when the user logs in and hide the progress indicator.
				email: '',
                pass: '',
                pass2:'',
				loading: false
			  });
		} catch (error) {
			this.setState({
				loading:true
			});
			console.log(error.toString()+">>signup")
			alert("Account creation failed: " + error.message );
			this.setState({
				loading:false
			});
        }
    }
    else{
        alert("password do not match with each");
        this.setState({
            // Clear out the fields when the user logs in and hide the progress indicator.
            email: '',
            pass: '',
            pass2:'',
            loading: false
          });
    }	
	}
}
const styles = StyleSheet.create({
    container:{
        padding:20
    },
    input:{
        height: 40,
		backgroundColor:'rgba(255,255,255,0.2)',
		marginBottom: 30,
		color: 'white',
		paddingHorizontal: 15,
		fontSize:20
    },
    buttonContainer:{
        backgroundColor: 'rgba(255,255,255,0.4)',
		paddingVertical: 10,
		marginBottom:10
    },
    buttonText:{
        textAlign: 'center',
		fontWeight: '900',
		color: 'black',
    }

});