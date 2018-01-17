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
          seatallocationsnames:'',
          selectecdseatallocation:{},
          getseatsonly:{},
      }
        this.displaySeatallocationsOnEventOrganizers = this.displaySeatallocationsOnEventOrganizers.bind(this);
        this.submitShow = this.submitShow.bind(this);
    }

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
    


    componentDidMount() {
        axios.post('http://localhost:3002/displayShowsOrganizer', {
            eventid: this.props.match.params.eventId,
          })
          .then( (response) => {
            
            this.setState({datas: response.data.data});
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }

    submitShow(e){
        e.preventDefault();
        axios.post('http://localhost:3002/createShows', {
            venue : this.refs.inputVenue.value,
            district : this.refs.inputDistrict.value,
            starttime : this.refs.inputStartTime.value,
            endtime : this.refs.inputEndTime.value,
            eventid :this.props.match.params.eventId,
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }

    handleVenue(e){
      this.setState({venue:e.target.value},()=>{
        if(this.state.venue !== 'None'){
           console.log(this.state.venue);           
           this.displaySeatallocationsOnEventOrganizers(this.state.venue);
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

  handleDate(e){
    
    this.setState({date:e.target.value},()=>{
      if(this.state.date !== 'None'){
         console.log(this.state.date);
    }
      
    });   
}

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
                              <select className="form-control" onChange={this.handleDate.bind(this)} >
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
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Time</label>
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
                                         
                                         <br/><br/>
                                         <div className="col-lg-2"></div>
                                         <div className="col-lg-10">
                                         <button type="submit" className="btn btn-default" onClick={this.submitShow}>Submit</button>
                                         
                                         </div>
                                           
                                 
                     </fieldset>
               </form>
               { Object.entries(this.state.datas).map((description, i) => {  
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
                  <Link className="btn btn-default" to={`/Seats/${this.props.match.params.eventId}/${description[0]}`}>Seat Allocations</Link>
                  </div>
                  </div>
                  
                  </div>

                  </div>
                  
                          )
                  })}
            </div>
            </div>
        );
    }
}

export default Shows;