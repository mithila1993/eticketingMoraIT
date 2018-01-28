import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Seatallocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{},
            vipprice:0,
            odcprice:0
        }
        this.updateSeatAllocation = this.updateSeatAllocation.bind(this);
    }

    updateSeatAllocation(){
        axios.post('http://localhost:3002/updateSeatAfterUserBuy', {
            eventid:this.props.match.params.eventId,
            showid:this.props.match.params.showId,
            seats:this.state.datas.seats,
            
            
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });

    axios.post('http://localhost:3002/updateSeatsOnOrder', {
            orderid:this.props.match.params.orderId,
            vip:this.state.vipprice,
            odc:this.state.odcprice,
            
            
          })
          .then(function (response) {
            NotificationManager.success('Successfully Seat Booking Confirmed');
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
}
    
    componentWillMount() {
        axios.post('http://localhost:3002/displayShowDetailsToUser', {
            eventid:this.props.match.params.eventId,
            showid:this.props.match.params.showId
                })
                .then( (response) => {
                  this.setState({datas: response.data.data},() => {
                                   });
                  
                })
                .catch( (error) => {
                  console.log("event error",error);
                });
    }

    getSeatNum(value1,value2,value3){
        console.log('value1',value1 );
        console.log('value2',value2 );
        console.log('value2',value3 );
        if(value3==='VIP'){
            console.log(this.state.datas.vipprice);
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'VIP-reserved';
            this.setState({jasper});
            
            this.setState(prevState => ({
                vipprice: prevState.vipprice + this.state.datas.vipprice
              }));
        }if(value3==='VIP-reserved'){
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'VIP';
            this.setState({jasper});
            this.setState(prevState => ({
                vipprice: prevState.vipprice - this.state.datas.vipprice
              }));
        }if(value3==='odc'){
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'odc-reserved';
            this.setState({jasper});
            console.log(jasper);
            this.setState(prevState => ({
                odcprice: prevState.odcprice + this.state.datas.odcprice
              }));
        }if(value3==='odc-reserved'){
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'odc';
            this.setState({jasper});
            console.log(jasper);
            this.setState(prevState => ({
                odcprice: prevState.odcprice - this.state.datas.odcprice
              }));
        }
    
    }
    

    render() {
        console.log(this.state.datas.seats);
        if(this.state.datas.seats !== undefined){
            var m =  Object.entries(this.state.datas.seats).map((description, i) => {  
                console.log('des',description);
                console.log('des-1',description[1]);
                return (
                  
                    <div>
                <div>
                 <tr>
                <td key={i} className={description[1][0]} onClick={this.getSeatNum.bind(this,i,0,description[1][0])}>
                <p  > </p>
                </td>
                <td className={description[1][1]} onClick={this.getSeatNum.bind(this,i,1,description[1][1])}>
                <p key={i}>  </p>
                </td>
                <td  className={description[1][2]} onClick={this.getSeatNum.bind(this,i,2,description[1][2])}>
                <p key={i}>  </p>
                </td> 
                <td  className={description[1][3]} onClick={this.getSeatNum.bind(this,i,3,description[1][3])}>
                <p key={i}>  </p>
                </td>        
                <td  className={description[1][4]} onClick={this.getSeatNum.bind(this,i,4,description[1][4])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][5]} onClick={this.getSeatNum.bind(this,i,5,description[1][5])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][6]} onClick={this.getSeatNum.bind(this,i,6,description[1][6])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][7]} onClick={this.getSeatNum.bind(this,i,7,description[1][7])}>
                <p key={i}>  </p>
                </td>  
                <td  className={description[1][8]} onClick={this.getSeatNum.bind(this,i,8,description[1][8])}>
                <p key={i}>  </p>
                </td>  
                <td  className={description[1][9]} onClick={this.getSeatNum.bind(this,i,9,description[1][9])}>
                <p key={i}>  </p>
                </td>  
                <td  className={description[1][10]} onClick={this.getSeatNum.bind(this,i,10,description[1][10])}>
                <p key={i}>  </p>
                </td>  
                <td  className={description[1][11]} onClick={this.getSeatNum.bind(this,i,11,description[1][11])}>
                <p key={i}>  </p>
                </td>  
                <td  className={description[1][12]} onClick={this.getSeatNum.bind(this,i,12,description[1][12])}>
                <p key={i}>  </p>
                </td>  
                <td  className={description[1][13]} onClick={this.getSeatNum.bind(this,i,13,description[1][13])}>
                <p key={i}>  </p>
                </td>  
                <td  className={description[1][14]} onClick={this.getSeatNum.bind(this,i,14,description[1][14])}>
                <p key={i}>  </p>
                </td>  
                </tr>
                </div>
                </div>
                        )
                });
        }
        

        
        return (
            <div className="container-new">
                
                <h1 className="seatplaningtitle">Seat Planning</h1>
                {/* <p>{this.props.match.params.eventId}</p>
                <p>{this.props.match.params.showId}</p>
                <p>{this.props.match.params.orderId}</p> */}
                <div className="col-md-12 informationbar">
                <div className="col-md-6 seats">
                <div className="col-md-12">
                <div className="smallbox VIP"></div><h4>VIP Cost - Rs.{this.state.datas.vipprice}</h4>
                </div>

                <div className="col-md-12">
                <div className="smallbox odc"></div><h4>odc Cost - Rs.{this.state.datas.odcprice}</h4>
                </div>

                </div>
                
                <div className="col-md-6">
                        <h4>Your VIP Cost - Rs.{this.state.vipprice}</h4>
                        <h4>Your ODC Cost - Rs.{this.state.odcprice}</h4>
                        <h2>Total Seat Booking Cost - Rs.{this.state.vipprice + this.state.odcprice} <button className="btn btn-default" onClick={this.updateSeatAllocation}>Confirm</button></h2>
                </div>        
                </div>
                
                <div className="col-lg-12 users submitbuttoncreateevent">
                                    <div className="col-lg-2"></div> 
                                    <div className="col-lg-8">{m}</div>
                                    </div>
               
                <div className="submitbuttoncreateevent">
                <Link className="btn btn-default btn-lg" to={`/Carparking/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Go To the Reserve Car Parking</Link>
                </div>
            </div>
        );
    }
}

export default Seatallocation;