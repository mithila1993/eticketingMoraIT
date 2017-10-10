import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text,StyleSheet,View,TouchableHighlight } from 'react-native';

export default class Home extends Component {
    onPress(){
        console.log('Area Pressed');
    }
    render() {
        return (
          <ScrollView style={styles.container}>
          {/* <Text style={{fontSize:96}}>Scroll me plz</Text>
         <Image style={styles.logo} source={require('../images/Oracle.png')} /> */}
         <TouchableHighlight onPress={this.onPress}>
          <View style={styles.myView}><Text style={styles.title}>Event 1</Text></View>
          </TouchableHighlight> 
          <View style={styles.myView}><Text style={styles.title}>Event 2</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 3</Text></View>
          {/* <Text style={{color:'white', fontSize:96}}>If you like</Text> */}
          
          {/* <Text style={{fontSize:96}}>Scrolling down</Text> */}
          <View style={styles.myView}><Text style={styles.title}>Event 4</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 5</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 6</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 7</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 8</Text></View>
          {/* <Text style={{fontSize:96}}>What's the best</Text> */}
          <View style={styles.myView}><Text style={styles.title}>Event 9</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 10</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 11</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 12</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 13</Text></View>
          {/* <Text style={{fontSize:80}}>React Native</Text> */}
          <View style={styles.myView}><Text style={styles.title}>Event 14</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 15</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 16</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 17</Text></View>
          <View style={styles.myView}><Text style={styles.title}>Event 18</Text></View>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor: '#404040',
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
		fontSize: 20,
		textAlign: 'center',
		opacity: 0.6
    },
    myView: {
        backgroundColor: 'black',
        flex: 1,
        padding: 10,
        marginBottom: 2,
        height:75,
        width:415,
      
    
    }


});

// skip these lines if using Create React Native App
AppRegistry.registerComponent('Home',() => Home); 