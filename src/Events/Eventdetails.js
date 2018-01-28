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

    seats(showId,date,carparkingId,shopId){
      var thisprop = this;
      console.log('seats clicked');
      console.log(showId);
      console.log('shopId',shopId);
      console.log(this.state.datas.name);
      console.log(this.props.match.params.eventId);
        
            axios.post('http://localhost:3002/addOrder', {
                showid : showId,
                name : this.state.datas.name,
                eventid : this.props.match.params.eventId,
                carparkingid : carparkingId,
                shopid : shopId,
                date :date,
              })
              .then( (response) => {
                
                console.log("order id",response.data);
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
            //console.log('response',this.state.shows);
            console.log('res',this.state.shows);
            
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
           <div className="col-md-4 eventdetailsimage" >
           <img src={this.state.datas.image} height="400px" width="300px"/>
           </div>
           <div className="col-md-8" >
           <h3>{this.state.datas.description}</h3>
           </div>
           </div>
            <h1 className="eventdetailsimage">Shows</h1>
            { Object.entries(this.state.shows).map((description, i) => {  
                  return (
                 
                  <div className="col-md-2 showsblock" >
                 
                  <div>
                  <h1 key={i}> {description[1].venue} </h1></div>
                  <div><p> {description[1].district}</p></div>
                  <div><p> {description[1].date}</p></div>
                  <div><p> {description[1].time}</p></div>
                  
                  
                  <div>
                  {/* <Link className="btn btn-default" to={`/Seats/${this.props.match.params.eventId}/${description[0]}`}>Book Now</Link> */}
                  <button className="btn btn-default" onClick={this.seats.bind(this,description[0],description[1].date,description[1].carparkingid,description[1].shopid)}>Book Now</button>
                  </div>
                  </div>
                  
                  
                  
                          )
                  })}

           </div>
        );
    }
}

export default Eventdetails;