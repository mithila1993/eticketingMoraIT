import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            price:0,
            
        }
            
        }

    render(){
        var {params} = this.props.navigation.state;
        // this.setState({
        //     price:price+parseInt(params.price)
        // })
           return(
              
               <Content>
                   <Title style={{color:'brown'}}>Cart</Title>
                   <Title style={{color:'brown'}}>Your claimed price :{params.price}</Title></Content>

           )
       }
}
