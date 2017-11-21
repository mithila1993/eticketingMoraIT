import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage,
	navigator,ActivityIndicator,ToolbarAndroid ,KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase';
import Login from './Login';
import { StackNavigator,} from 'react-navigation';
//const util = require('util');

export default class LoginForm extends Component{
    static navigationOption = {
        title:'Login'
    };
	constructor(props){
		super(props);
		
		this.state = {
			loading: false,
			email:'',
			pass:'',
			id:this.props.id
			
		};
		this.login=this.login.bind(this);
		//this.signup=this.signup.bind(this);
}
	render(){
		//console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
		
		const content = this.state.loading ? <ActivityIndicator size="large"/> :
		//<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<View style={styles.container}>
				<TextInput style={styles.text}
							placeholder="Email"
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="next"
							onSubmitEditing={()=>this.passwordInput.focus()}
							onChangeText={(email)=>this.setState({email})} //
							value={this.state.email}   							//
							style={styles.input}
					/>
				<TextInput 
							placeholder="Password"
							placeholderTextColor="rgba(255,255,255,0.7)"
							returnKeyType="go"
							secureTextEntry
							style={styles.input}
							ref={(input)=>this.passwordInput=input}
							onChangeText={(pass)=>this.setState({pass})} //
							value={this.state.pass} //
					/>
					
			<TouchableOpacity onPress={this.login} 
			style={styles.buttonContainer}>
			<Text style={styles.buttonText}>LOGIN
			</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity onPress={()=>navigate('Register')} 
			style={styles.buttonContainer}>
			<Text style={styles.buttonText}>SIGNUP
			</Text>
			</TouchableOpacity> */}
			</View>
			//</KeyboardAvoidingView>	;
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
async login() {
		try {
			this.setState({
				loading:true
			});
			await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass)
				.then((userData) => { 
                    AsyncStorage.setItem('userData', JSON.stringify(userData));
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
				loading:true,
				email: '',
				pass: '',
			});
			console.log(error.toString()+"login>>")
			alert("Account login failed: " + error.message );
			this.setState({
				loading:false
			});
		}
	
	}
// signup(){
// 	this.props.navigation.navigate('Register')
// 	  }
	 
async logout(){ 
	try{
		firebase.auth().onAuthStateChanged(firebaseUser=>{
		if(firebaseUser){
			console.log(firebaseUser);
		}else{
			console.log('not logged in');
		}
	});
	
}catch (error) {
	console.log(error.toString()+"logout>>")
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
	buttonContainer2: {
		backgroundColor: 'rgba(255,255,255,0.1)',
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