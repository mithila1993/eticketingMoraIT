import React, { Component } from 'react';
import { Image ,StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button,
   Icon, Left, Body, Right } from 'native-base';
export default class Event extends Component {
  render() {
    return (
      <Container style={styles.outcontainer}>
        <Content >
          <Card >
            <CardItem style={styles.container}>
              <Left>
                <Thumbnail source={require('./Oracle2.png')} />
                <Body >
                  <Text style={{color:'white'}}>{this.props.items.title}</Text>
                  <Text note>CRFC</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={styles.container}>
              <Image source={{uri: 'http://www1.pictures.zimbio.com/gi/Enrique+Iglesias+Heroes+Concert+Show+Y4N3yobszgUl.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem style={styles.container}>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text style={{color:'blue'}}>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    );
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