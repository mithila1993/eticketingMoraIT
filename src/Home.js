import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Dhar from './img/darmayuddaya.jpg';
import Spi from './img/spiderman.jpg';
import Unl from './img/unlocked.jpg';
import Last from './img/last.jpg';
import axios from 'axios';





class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas: {},
            temp : {} 
        }

        
    }

   
   componentDidMount() {
    var places=axios.post('http://localhost:3001/recentevents', {
      
          })
          .then( (response) => {
            
            // console.log("event response",response);
            // this.setState({datas: response});
            // console.log('state', this.state.datas);
            
            const p = "nimal";
            var nim = "kam";
            console.log('nim',nim);
            this.setState({datas: response});
            console.log(this.state.datas.data.data);
            
            
         })
            
            
       
            
            
      
          
          .catch( (error) => {
            console.log("event error",error);
          });
          
     
   }
      
    


  render() {

    

    // var places=axios.post('http://localhost:3001/recentevents', {

    // })
    // .then( (response) => {
      
    //   // console.log("event response",response);
    //   // this.setState({datas: response});
    //   // console.log('state', this.state.datas);
      
    //   const p = "nimal";
    //   var nim = "kam";
    //   console.log('nim',nim);
    //   this.setState({datas: response});
      
      

    // })
    // .catch( (error) => {
    //   console.log("event error",error);
    // });
    
      
    
     const starCountRef = firebase.database().ref('react/event');
    starCountRef.once('value', (snapshot)=>{
        this.setState({temp: Object.values(snapshot.val())})
        
    });

    var vplaces = Object.values(this.state.temp).map((data, i) => {
    return (<div>
            <h2 key={i}> {data.event} </h2>
            <p> {data.description}</p></div>)
    });

    // var vplaces = Object.values(this.state.datas.data.data).map((data, i) => {
    //   return (
        
    //   <div>
    //   <h2 key={i}> {data} </h2>
    //   <p> {}</p></div>
    //           )
    //   });
    
    // });
    // // var starCountRef = 5;
    // {console.log('hello nimal',this.state.datas)}
    return (
      
      <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
  <ol className="carousel-indicators">
    <li  data-slide-to="0" className="active"></li>
    <li  data-slide-to="1"></li>
    <li  data-slide-to="2"></li>
    <li  data-slide-to="3"></li>
    <li data-slide-to="0"></li>
  </ol>

  
  <div className="carousel-inner">
    <div className="item active">
      <img src={Dhar} alt="Dharmayuddaya" />
    </div>

    <div className="item">
      <img src={Spi} alt="Spiderman" />
    </div>

    <div className="item">
      <img src={Unl} alt="Unlocked" />
    </div>

    <div className="item">
      <img src={Last} alt="Last shot" />
    </div>

  </div>

 
  <a className="left carousel-control" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

        <h1>Recent Events</h1>
       {/* {this.state.datas.data.data.map((goal,i) => {
         return(
           <div key={i}>{goal.event}</div>
         )
       })} */}
       
        
        {vplaces}
      </div>
    );
  }
  }


export default Home;

