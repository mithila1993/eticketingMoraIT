import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Dhar from './img/darmayuddaya.jpg';
import Spi from './img/spiderman.jpg';
import Unl from './img/unlocked.jpg';
import Last from './img/last.jpg';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Recentevents from './Home/Recentevents.js';





class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            datas: {
              
            }, 
        }

        
    }

  render() {

    

    return (
      
      <div>
         <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
                <div>
                    <img src={Dhar} />
                    <p className="legend">Dharama Yudhdhaya</p>
                </div>
                <div>
                    <img src={Spi} />
                    <p className="legend">Spiderman</p>
                </div>
                <div>
                    <img src={Unl} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

          <div className="container-new">
        
        
       <div><Recentevents/></div>
       </div>
       
       
      </div>
    );
  }
  }


export default Home;

