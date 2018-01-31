import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  Alert, 
  ScrollView,
  AlarmManager,
  ActivityIndicator,
  Dimensions, 
  MapView
 } from 'react-native';
import { StackNavigator,} from 'react-navigation';
import { Container, Header, Title, Button, Left, Right, Body, Icon,Content,Footer } from 'native-base';
import {Column as Col, Row} from 'react-native-flexbox-grid';
export default class FoodsBeverages extends Component {

  constructor(props) {
    super(props);
   
      this.state = {
      isLoading:true,
      
      clonedFoods:[],
      
     
    }
    // this.onpress=this.setOrder.bind(this);
  }  
  componentWillMount() { 
    var {params} = this.props.navigation.state;
    fetch(`http://oracleevents.projects.mrt.ac.lk:3002/displayShopProductsOnUser/${params.rowData.shopid}/`,
    {method: 'GET'})
    .then((response)=>response.json())
    .then((responseJson)=>{
        var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
            isLoading:false,
            clonedFoods: standardDataSource.cloneWithRows(responseJson.data)
        });
        this.onPress=this.onPress.bind(this);
    })
    
}
  

render() {

  var {params} = this.props.navigation.state;
    console.log(this.state.clonedFoods)
  if(this.state.isLoading){
    return(
        <View>
            <ActivityIndicator/>
        </View>
    )
}
// this.state.clonedFoods.map((data) => {
//   console.log('this is going to display index');
//  // console.log(index),
//   console.log('this is going to display data');
//   //console.log(data)})
  return (
    <View>
      <ListView dataSource={this.state.clonedMovies}
      renderRow={
        (rowData)=> 
        <ScrollView>
        <Content>
          <Row style={styles.row}>
            <Col style={styles.foodBox}><Image source={{uri: this.rowData.image}} style={{width: 400, height: 500, flex: 1}}/>
            </Col>
            </Row>
        </Content>  
        </ScrollView>
      }
      />
     </View>
    
)



}
onPress(){
  console.log('pressed');
}
    
}
const styles = StyleSheet.create({
  foodBox:{
    borderWidth : 1,
    borderColor: 'black',
    paddingBottom: 2,
    paddingTop: 2,
  //   paddingLeft:5,
    padding:25,
    backgroundColor:'#070707',
    
  },
  row:{
    flex:1
  }
})