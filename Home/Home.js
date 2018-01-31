import React, { Component } from 'react';
import { Image ,StyleSheet,TouchableHighlight} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button,
   Icon, Left, Body, Right } from 'native-base';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation'; 


export default class Home extends Component {
  constructor(props){
		super(props);
		
		this.state = {
			counter:0
			
		};
	
}
  render() {
    //console.log(this.props.rowData)
    return (
     
        <Content style={styles.outcontainer}>
               
          <Card >
            <CardItem style={styles.container}>
              <Left>
                <Thumbnail source={require('./Oracle2.png')} />
                <Body >
                  
                  <Text style={{color:'white'}}>{this.props.rowData.name}</Text>
                  
                  <Text note>default</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={styles.container} >
              <Image source={{uri: this.props.rowData.image}} 
             style={{width: 400, height: 500, flex: 1}}
              />
            </CardItem>
            <CardItem style={styles.container}>
              {/* <Left>
                <Button transparent onPress={this.likeCounter.bind(this)}>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left> */}
              {/* <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text style={{color:'blue'}}>11h ago</Text>
              </Right> */}
            </CardItem>
          </Card>
        </Content>
    );
  }
  async likeCounter(){
    
    console.log("counter")
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black'
    },
    outcontainer: {
      backgroundColor: '#111111'
      }
});