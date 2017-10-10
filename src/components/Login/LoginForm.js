import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage,
	navigator,ActivityIndicator,ToolbarAndroid } from 'react-native';
import * as firebase from 'firebase';
import Component1 from '../Component1';
import Login from './Login';

export default class LoginForm extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			loading: false,
			email:'',
			pass:'',
			id:this.props.id
			
		};
		this.signup=this.signup.bind(this);
		this.login=this.login.bind(this);
}
	render(){
		
		const content = this.state.loading ? <ActivityIndicator size="large"/> :
		
			<View style={styles.container}>
				<TextInput style={styles.text}
							placeholder="email"
							
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="next"
							onSubmitEditing={()=>this.passwordInput.focus()}
							onChangeText={(email)=>this.setState({email})} //
							value={this.state.email}   							//
							style={styles.input}
					/>
				<TextInput 
							placeholder="password"
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="go"
							secureTextEntry
							style={styles.input}
							ref={(input)=>this.passwordInput=input}
							onChangeText={(pass)=>this.setState({pass})} //
							value={this.state.pass} //
					/>
					
			<TouchableOpacity onPress={this.login} 
			style={ styles.buttonContainer}>
			<Text style={styles.buttonText}>LOGIN
			</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={this.signup}
			style={ styles.buttonContainer}>
			<Text style={styles.buttonText}>SIGNUP
			</Text>
			</TouchableOpacity>
			</View>	;
		return(	
			<View style={styles.container}>
			<ToolbarAndroid
				style={styles.toolbar}
				title="Sign" />
			<View style={styles.body}>
				{content}
			</View>
			</View>
		);
	}
async signup() {
		try {
			this.setState({
				loading:true
			});
			await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
			 		.then(() => {
						alert('Your account was created!');
					 })
			console.log('Signed up');
			this.setState({
				// Clear out the fields when the user logs in and hide the progress indicator.
				email: '',
				pass: '',
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
async login() {
		try {
			this.setState({
				loading:true
			});
			await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
				.then(() => {
					alert('Successfully Logged In!');
				})
			console.log("Logged In!");
			this.setState({
				email: '',
				pass: '',
				loading: false,
				//id:true
			});
			//<Login id='1'/>
			console.log("hey");
		} catch (error) {
			this.setState({
				loading:true
			});
			console.log(error.toString()+"login>>")
			alert("Account login failed: " + error.message );
			this.setState({
				loading:false
			});
		}
	
	}
	
} 
const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor:'rgba(255,255,255,0.2)',
		marginBottom: 30,
		color: 'white',
		paddingHorizontal: 15,
		fontSize:20
	},
	buttonText: {
		color: 'white',
		fontSize: 30
	},
	buttonContainer: {
		backgroundColor: 'rgba(255,255,255,0.4)',
		paddingVertical: 10,
		marginBottom:10
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: '900',
		color: 'black',
	},
	text: {
		fontSize: 30
	}
});
AppRegistry.registerComponent('LoginForm', () => LoginForm);