import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView
} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer,Thumbnail,Card,CardItem } from 'native-base';
import { StackNavigator,} from 'react-navigation';
import * as firebase from "firebase";
//const util =require('util');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class Component2 extends Component {
    static navigationOption= {
        title:'Second Component1',
      };

      // constructor(props) {
      //   super(props);
      //   this.state = {
      //     dataSource: new ListView.DataSource({
      //       rowHasChanged: (row1, row2) => row1 !== row2,
      //     }),
      //     dataSource2: new ListView.DataSource({
      //       rowHasChanged: (row1, row2) => row1 !== row2,
      //     })
      //   };
      //   this.itemsRef = firebase.database().ref('event').orderByValue(); //Order results by child values
      //   this.showref  = firebase.database().ref('show').orderByValue();
      //   this.listenForItems(this.itemsRef);
      //   this.listenForShows(this.showref);
      //   console.ignoredYellowBox = [
      //   'Setting a timer'];
      // }

    render(){
       // console.log('this.props.navigation='+util.inspect(this.props.navigation,false,null));
        var {params} = this.props.navigation.state;
        return(
            <Container style={styles.container}>
                <Thumbnail  square source={{uri: 'http://www1.pictures.zimbio.com/gi/Enrique+Iglesias+Heroes+Concert+Show+Y4N3yobszgUl.jpg'}} 
                    style={{height: 300, width: '100%', flex: 1}} />
                    <Title style={styles.eventTitle}>{params.items.title}</Title>
                    
                    <Content>
                    <Card >
                    <CardItem style={styles.cardColor}>
                      <Icon active name="home" />
                      <Text style={styles.cardText}></Text>
                      <Right>
                        
                      </Right>
                     </CardItem>
                   </Card>

                   <Card>
                    <CardItem style={styles.cardColor}>
                      <Icon active name="calendar" />
                      <Text style={styles.cardText}>{params.items.description}</Text>
                      <Right>
                        
                      </Right>
                     </CardItem>
                   </Card>

                   <Card>
                    <CardItem style={styles.cardColor}>
                      <Icon active name="clock" />
                      <Text style={styles.cardText}>{params.items.title}</Text>
                      <Right>
                        
                      </Right>
                     </CardItem>
                   </Card>
                   <Card>
                    <CardItem style={styles.cardColor}>
                      <Icon active name="calendar" />
                      <Text style={styles.cardText}>{params.items.description}</Text>
                      <Right>
                        
                      </Right>
                     </CardItem>
                   </Card>
                   <Card>
                    <CardItem style={styles.cardColor}>
                      <Icon active name="calendar" />
                      <Text style={styles.cardText}>{params.items.description}</Text>
                      <Right>
                        
                      </Right>
                     </CardItem>
                   </Card>
                   </Content>
                  
             </Container>   
        )


    }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#131314'
    },
  cardColor: {
    backgroundColor:'#65656d',
  },  
  cardText: {
    color:'black',
    fontWeight:'900',
    
  },
  eventTitle:{
  backgroundColor:'black',
  color:'white',
  fontSize:25,
  fontFamily: 'PingFangSC-Thin',

  }
    
    
  
});