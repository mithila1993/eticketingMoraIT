import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = {
          datas: {},
          
      }

        this.submitShow = this.submitShow.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3002/displayShowsOrganizer', {
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
            hall : this.refs.inputHall.value,
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
    
    render() {
        
        return (
            <div>
               <div>
               <form className="form-horizontal">
                     <fieldset>
                           <legend><h1>Create Show</h1></legend>
                                 <div className="form-group">
                                         <label htmlFor="inputEmail" className="col-lg-2 control-label">Venue</label>
                                         <div className="col-lg-10">
                                         <input type="text" className="form-control" id="inputVenue" placeholder="Event Name" ref="inputVenue"/>
                                         </div>
                                         <label htmlFor="inputPassword" className="col-lg-2 control-label">District</label>
                                         <div className="col-lg-10">
                                         <input type="text" className="form-control" id="inputDescription" placeholder="Write a description" ref="inputDistrict"/>
                                       </div>
                                         <div className="col-lg-10">
                                         <label htmlFor="inputPassword" className="col-lg-2 control-label">Hall</label>
                                         <div className="col-lg-10">
                                         <input type="text" className="form-control" id="inputCategory" placeholder="Write Category" ref="inputHall"/>
                                            </div>
                                            <label htmlFor="inputPassword" className="col-lg-2 control-label">Start time</label>
                                         <div className="col-lg-10">
                                         <input type="text" className="form-control" id="inputStartTime" placeholder="Write Category" ref="inputStartTime"/>
                                            </div>
                                            <label htmlFor="inputPassword" className="col-lg-2 control-label">End time</label>
                                         <div className="col-lg-10">
                                         <input type="text" className="form-control" id="inputEndTime" placeholder="Write Category" ref="inputEndTime"/>
                                            </div>
                                         </div>
                                         {/* <div className="col-lg-2"></div>
                                         <div className="col-lg-10">
                                         <button type="submit" className="btn btn-default" onClick={this.addShows}>Add Show</button>
                                         </div> */}
                                         {/* {shows} */}
                                         <br/><br/>
                                         <div className="col-lg-2"></div>
                                         <div className="col-lg-10">
                                         <button type="submit" className="btn btn-default" onClick={this.submitShow}>Submit</button>
                                         
                                         </div>
                                           
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