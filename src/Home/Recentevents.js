import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as firebase from 'firebase';
import { Route } from 'react-router';
import { Link, Redirect, withRouter } from 'react-router-dom'



var displayImg ;
var recent = {
    user : "hello"
}
var test;

class Recentevents extends Component {
    constructor(props){
        
        super(props);
        this.state = {
            datas: {},
            image:{},
        }
        // this.displayImage = this.displayImage.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.datas != nextState.datas;
    //   }
    
    // displayImage(image){
    //     // let currentComponent = this;
    //     displayImg = firebase.storage().ref('events').child(image).getDownloadURL().then(function(url){
    //         // currentComponent.setState({
    //         //     image : url
    //         // });
    //         return url; 
    //         // recent.user = url;
    //         // console.log('hellllll',recent);
    //     });
    //     // console.log(this.state.temp);
    //     console.log('display',displayImg);
    //     return displayImg;
    //    }

    componentDidMount() {
        var places=axios.get('http://localhost:3002/recentevents', {
            
                })
                .then( (response) => {
                this.setState({datas: response.data.data});
                // recent =  response.data.data;
                // console.log(recent);
                // console.log('mello',response.data.data);
                
                })
                .catch( (error) => {
                  console.log("event error",error);
                });
    }

    render() {

        
               
       console.log(this.state.datas);         

        return (
            <div>
                <h1>Recent Events</h1>
               { Object.entries(this.state.datas).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <div className="col-md-12" >
                 <div className="col-md-2"><img src={description[1].image} height="250px" width="170px"/></div>
                  <div className="col-md-10">
                  <h1 key={i}> {description[1].name} </h1>
                  <p> {description[1].description}</p>
                  
                  <Link className="btn btn-default" to={`/Eventdetails/${description[0]}`}>More Details</Link>
                  
                  </div>
                  
                  </div>
                  

                  {/* {this.state.image} */}
                  {/* <img src={this.displayImage(description[1].image)} /> */}
                    {/* <p>ggggg ---- {this.displayImage(description[1].image).za}</p>
                    {console.log('hello',this.displayImage.bind(this,description[1].image))}
                  <p>special - {recent.user}</p> */}
                  {/* {firebase.storage().ref('events').child(description[1].image).getDownloadURL().then(function(url){
                      console.log(url);
                   })}  */}

                  </div>
                  </div>
                          )
                  })}
            </div>
            
            
        );
    }
}

export default Recentevents;