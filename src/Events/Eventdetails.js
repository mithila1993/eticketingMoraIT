import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

class Eventdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},
            shows:{},
            orderid:{}
            }
          
    }

    seats(showId){
      var thisprop = this;
      console.log('seats clicked');
      console.log(showId);
      console.log(this.state.datas.name);
      console.log(this.props.match.params.eventId);
        
            axios.post('http://localhost:3002/addOrder', {
                showid : showId,
                name : this.state.datas.name,
                eventid : this.props.match.params.eventId
              })
              .then( (response) => {
                
                console.log("event response",response.data);
                this.props.history.push('/Seatallocation/'+ this.props.match.params.eventId +'/'+ showId+'/'+ response.data);

              })
              .catch(function (error) {
                console.log("event error",error);
              });
      
    }

    componentDidMount() {
    axios.post('http://localhost:3002/displayEventDetails', {
            eventid: this.props.match.params.eventId,
          })
          .then( (response) => {
            
            this.setState({datas: response.data.data});
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });

    axios.post('http://localhost:3002/displayShowsOrganizer', {
            eventid: this.props.match.params.eventId,
          })
          .then( (response) => {
            
            this.setState({shows: response.data.data});
            console.log('response',this.state.shows);
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });

    }
    
    

    render() {
        return (
           <div className="container-new">
           <div className="col-md-12" >
           <div className="col-md-12" >
           <h1>{this.state.datas.name}</h1>
           </div>
           <div className="col-md-4" >
           <img src={this.state.datas.image} height="400px" width="300px"/>
           </div>
           <div className="col-md-8" >
           <h2>{this.state.datas.description}</h2>
           </div>
           </div>
            <h1>Shows</h1>
            { Object.entries(this.state.shows).map((description, i) => {  
                  return (
                    
                    <div>
                  <div>
                  <div className="col-md-12" >
                 
                  <div className="col-md-2">
                  <h1 key={i}> {description[1].destrict} </h1></div>
                  <div className="col-md-2"><p> {description[1].venue}</p></div>
                  <div className="col-md-2"><p> {description[1].hall}</p></div>
                  <div className="col-md-2"><p> {description[1].starttime}</p></div>
                  <div className="col-md-2"><p> {description[1].endtime}</p></div>
                  <div className="col-md-2">
                  {/* <Link className="btn btn-default" to={`/Seats/${this.props.match.params.eventId}/${description[0]}`}>Book Now</Link> */}
                  <button className="btn btn-default" onClick={this.seats.bind(this,description[0])}>Book Now</button>
                  </div>
                  </div>
                  
                  </div>

                  </div>
                  
                          )
                  })}

           </div>
        );
    }
}

export default Eventdetails;