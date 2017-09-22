import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View,Image,Text,KeyboardAvoidingView,ToolbarAndroid} from 'react-native';
import LoginForm from './LoginForm';

import * as firebase from 'firebase';
import Component1 from '../Component1';

export default class Login extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			id:false
		};

}
	render(){
		const content1 = this.state.id ? <Component1/>:
		
		<View style={styles.logoContainer}>
		<Image 
		style={styles.logo}
		source={require('../../images/Oracle.png')}/>
		<Text style={styles.title}>look it and make it</Text>
		</View>;

		return(
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
		{content1}
		<View style={styles.formContainer}>
		<LoginForm/>
		<Text style={styles.title}>Powered by react-native</Text>
		</View>
		</KeyboardAvoidingView>
		
			// <View style={styles.container}>
			// <ToolbarAndroid
			// 	style={styles.toolbar}
			// 	title="Home" />
			// <View style={styles.body}>
			// 	{content1}
			// </View>
			// </View>
			
			);

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	logo: {
		width: 200,
		height: 200
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontWeight: '100',
		marginTop: 10,
		fontSize: 15,
		textAlign: 'center',
		opacity: 0.6


	}


});
AppRegistry.registerComponent('Login', () => Login);