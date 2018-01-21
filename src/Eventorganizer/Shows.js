import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import '../App.css';

class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datas: {},
          venue:'',
          district:'',
          time:'',
          seatallocationsnames:'',
          selectecdseatallocation:{},
          getseatsonly:{},
          shopnames:{},
          selectshop:'',
          carparkingnames:{},
          selectcarparking:'',
          
      }
        this.displaySeatallocationsOnEventOrganizers = this.displaySeatallocationsOnEventOrganizers.bind(this);
        this.submitShow = this.submitShow.bind(this);
        this.displayShopsEventOrganizers = this.displayShopsEventOrganizers.bind(this);
        this.displayCarParkingsEventOrganizers = this.displayCarParkingsEventOrganizers.bind(this);
    }
//Display Seat Allocations

    displaySeatallocationsOnEventOrganizers(value){
      axios.post('http://localhost:3002/displaySeatallocationsOnEventOrganizers', {
          venue: value,  
      })
      .then( (response) => {
        this.setState({seatallocationsnames: response.data.data});
      })
      .catch( (error) => {
        console.log("event error",error);
      });
    }

  //Display Shops

    displayShopsEventOrganizers(value){
      axios.post('http://localhost:3002/displayShopsEventOrganizers', {
          venue: value,  
      })
      .then( (response) => {
        this.setState({shopnames: response.data.data});
      })
      .catch( (error) => {
        console.log("event error",error);
      });
    }

    // Display Car Parkings

    displayCarParkingsEventOrganizers(value){
      axios.post('http://localhost:3002/displayCarParkingsEventOrganizers', {
          venue: value,  
      })
      .then( (response) => {
        this.setState({carparkingnames: response.data.data});
      })
      .catch( (error) => {
        console.log("event error",error);
      });
    }
    



    //Submit Show

    submitShow(e){
        e.preventDefault();
        console.log(this.refs.inputDate.value);

        axios.post('http://localhost:3002/createShows', {
            venue : this.state.venue,
            district : this.state.district,
            time : this.state.time,
            date: this.refs.inputDate.value,
            seats : this.state.getseatsonly,
            carparkingid:this.state.selectcarparking,
            shopid:this.state.selectshop,
            eventid :this.props.match.params.eventId,
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }

  //When Select Venue

    handleVenue(e){
      this.setState({venue:e.target.value},()=>{
        if(this.state.venue !== 'None'){
           console.log(this.state.venue);           
           this.displaySeatallocationsOnEventOrganizers(this.state.venue);
           this.displayShopsEventOrganizers(this.state.venue);
           this.displayCarParkingsEventOrganizers(this.state.venue);
                    }if(this.state.venue === 'Savoy'){
                        this.setState({district:'Colombo'});
                        console.log(this.state.district);
                    }if(this.state.venue === 'Liberty'){
                        this.setState({district:'Gampaha'});
                        console.log(this.state.district);
                    }if(this.state.venue === 'Majestic City'){
                        this.setState({district:'Kandy'});
                        console.log(this.state.district);
      }
        
      });   
  }

  //When Select Date

  handleTime(e){
    
    this.setState({time:e.target.value},()=>{
      if(this.state.date !== 'None'){
         console.log(this.state.date);
    }
      
    });   
}

//When Select Seat Alocation (Show also Preview)

handleSeatAllocations(e){
  this.setState({selectecdseatallocation:e.target.value},()=>{
    if(this.state.venue !== 'None'){
       console.log(this.state.selectecdseatallocation);
       firebase.database().ref('react/seatallocations/'+this.state.selectecdseatallocation+'/seats').on('value', (snapshot) => {
        
        this.setState({getseatsonly:snapshot.val()},()=>{
             
        });
      });
  }
    
  });   
}

// When Select Carparking

handleCarParking(e){
    
  this.setState({selectcarparking:e.target.value},()=>{
    if(this.state.selectcarparking !== 'None'){
       console.log(this.state.selectcarparking);
  }
    
  });   
}

// When Select Shops

handleShop(e){
    
  this.setState({selectshop:e.target.value},()=>{
    if(this.state.selectshop !== 'None'){
       console.log(this.state.selectshop);
  }
    
  });   
}

    
    render() {
      
      var m =  Object.entries(this.state.getseatsonly).map((description, i) => {  
         
        return (
          
            <div>
        <div>
         {/* {console.log('description',description[1][0])}  */}
        {/* {description[1][3]}  */}
         <tr>
        <td key={i} className={description[1][0]} >
        <p  >{description[1][0]} {i}</p>
        </td>
        <td className={description[1][1]}>
        <p key={i}> {description[1][1]} </p>
        </td>
        <td  className={description[1][2]}>
        <p key={i}> {description[1][2]} </p>
        </td> 
        <td  className={description[1][3]}>
        <p key={i}> {description[1][3]} </p>
        </td>        
        <td  className={description[1][4]}>
        <p key={i}> {description[1][4]} </p>
        </td>     
        <td  className={description[1][5]}>
        <p key={i}> {description[1][5]} </p>
        </td>     
        <td  className={description[1][6]}>
        <p key={i}> {description[1][6]} </p>
        </td>     
        <td  className={description[1][7]}>
        <p key={i}> {description[1][7]} </p>
        </td>  
        </tr>
        </div>
        </div>
                )
        });
        
        return (
            <div>
               <div>
               <form className="form-horizontal">
                     <fieldset>
                           <legend><h1>Create Show</h1></legend>
                                 <div className="form-group">

                              <label htmlFor="inputEmail" className="col-lg-2 control-label">Venue</label>
                              <div className="col-lg-8">
                              <select className="form-control" onChange={this.handleVenue.bind(this)} >
                                    <option value="None">None</option>
                                    <option value="Savoy">Savoy</option>
                                    <option value="Majestic City">Magestic City</option>
                                    <option value="Liberty">Liberty</option>
                                    </select>
                                    </div>
                                    </div>
                                    
                                         
                                            <div className="col-lg-12">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Time</label>
                              <div className="col-lg-8">
                              <select className="form-control" onChange={this.handleTime.bind(this)} >
                                    <option value="None">None</option>
                                    <option value="5.00 PM">5.00 PM</option>
                                    <option value="6.00 PM">6.00 PM</option>
                                    <option value="7.00 PM">7.00 PM</option>
                                    </select>
                                    </div>
                                    </div>
                                    
                                     <div className="col-lg-12">   
                                            <label htmlFor="inputPassword" className="col-lg-2 control-label">Date</label>
                                         <div className="col-lg-10">
                                         <input type="date" className="form-control" id="inputEndTime" placeholder="Write Category" ref="inputDate"/>
                                            </div>
                                            </div>
                                         
                                         {/* <div className="col-lg-2"></div>
                                         <div className="col-lg-10">
                                         <button type="submit" className="btn btn-default" onClick={this.addShows}>Add Show</button>
                                         </div> */}
                                         {/* {shows} */}

                                         <div className="col-lg-12">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Seat Allocations</label>
                              <div className="col-lg-8">
                              <select className="form-control" onChange={this.handleSeatAllocations.bind(this)} >
                                      <option value="None">None</option>
                                       { Object.entries(this.state.seatallocationsnames).map((description, i) => {
                                         
                                        return (<option key={i} value={description[0]}>{description[1].name}</option>)
                                        })}
                                      
                                    </select>
                                    </div>
                                    </div>


                                    <div className="col-lg-12">
                                    <div className="col-lg-2">Preview</div> 
                                    <div className="col-lg-8">{m}</div>
                                    </div>

                                    <div className="col-lg-12">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Car Parking</label>
                              <div className="col-lg-8">
                              <select className="form-control" onChange={this.handleCarParking.bind(this)} >
                                      <option value="None">None</option>
                                       { Object.entries(this.state.carparkingnames).map((description, i) => {
                                         
                                        return (<option key={i} value={description[0]}>{description[1].name}</option>)
                                        })}
                                    </select>
                                    </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Shops</label>
                              <div className="col-lg-8">
                              <select className="form-control" onChange={this.handleShop.bind(this)} >
                                      <option value="None">None</option>
                                       { Object.entries(this.state.shopnames).map((description, i) => {
                                         
                                        return (<option key={i} value={description[0]}>{description[1].name}</option>)
                                        })} 
                                    </select>
                                    </div>
                                    </div>
                                         
                                         <br/><br/>
                                         <div className="col-lg-2"></div>
                                         <div className="col-lg-10">
                                         <button type="submit" className="btn btn-default" onClick={this.submitShow}>Submit</button>
                                         
                                         </div>
                                           
                                 
                     </fieldset>
               </form>
               
            </div>
            </div>
        );
    }
}

export default Shows;