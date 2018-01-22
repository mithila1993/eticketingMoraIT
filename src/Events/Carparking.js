import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

class Carparking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{},
            carparking:{},
            carprice:0,
            threewheelerprice:0
        }
        this.updateCarParking = this.updateCarParking.bind(this);
    }


    updateCarParking(){
        axios.post('http://localhost:3002/updateCarParkingAfterUserBuy', {
            carparkid:this.state.carparking.carparkingid,
            date:this.state.carparking.date,
            carparkslot:this.state.carparking.carparkslot,
            orderid:this.props.match.params.orderId,
            car:this.state.carprice,
            threewheeler:this.state.threewheelerprice,

            
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });

}

    getCarParkSlot(value1,value2,value3){
        console.log('value1',value1 );
        console.log('value2',value2 );
        console.log('value2',value3 );
        if(value3==='car'){
            console.log(this.state.datas.carprice);
            let jasper = Object.assign({}, this.state.carparking.carparkslot);
            
            jasper[value1][value2] = 'car-reserved';
            this.setState({jasper});
            console.log("hello",this.state.carparking.carprice);
            this.setState(prevState => ({
                carprice: prevState.carprice + parseInt(this.state.carparking.carprice)
              }));
        }if(value3==='car-reserved'){
            let jasper = Object.assign({}, this.state.carparking.carparkslot);
            
            jasper[value1][value2] = 'car';
            this.setState({jasper});
            this.setState(prevState => ({
                carprice: prevState.carprice - parseInt(this.state.carparking.carprice)
              }));
        }if(value3==='threewheeler'){
            let jasper = Object.assign({}, this.state.carparking.carparkslot);
            
            jasper[value1][value2] = 'threewheeler-reserved';
            this.setState({jasper});
            this.setState(prevState => ({
                threewheelerprice: prevState.threewheelerprice + parseInt(this.state.carparking.threewheelerprice)
              }));
        }if(value3==='threewheeler-reserved'){
            let jasper = Object.assign({}, this.state.carparking.carparkslot);
            console.log(this.state.datas);
            jasper[value1][value2] = 'threewheeler';
            this.setState({jasper});
            this.setState(prevState => ({
                threewheelerprice: prevState.threewheelerprice - parseInt(this.state.carparking.threewheelerprice)
              }));
        }
    
    }


    componentWillMount() {
            axios.post('http://localhost:3002/displayCarParkOnUser', {
                    eventid:this.props.match.params.eventId,
                    showid:this.props.match.params.showId,
                })
                .then( (response) => {
                  this.setState({carparking: response.data},() => {
                    console.log(this.state.carparking);
                                   });
                  
                })
                .catch( (error) => {
                  console.log("car",error);
                });
        
    }

    render() {

        if(this.state.carparking.carparkslot !== undefined){
            var m =  Object.entries(this.state.carparking.carparkslot).map((description, i) => {  
        
                return (
                  
                    <div>
                <div>
                 <tr>
                <td key={i} className={description[1][0]} onClick={this.getCarParkSlot.bind(this,i,0,description[1][0])}>
                <p> </p>
                </td>
                <td className={description[1][1]} onClick={this.getCarParkSlot.bind(this,i,1,description[1][1])}>
                <p key={i}>  </p>
                </td>
                <td  className={description[1][2]} onClick={this.getCarParkSlot.bind(this,i,2,description[1][2])}>
                <p key={i}>  </p>
                </td> 
                <td  className={description[1][3]} onClick={this.getCarParkSlot.bind(this,i,3,description[1][3])}>
                <p key={i}>  </p>
                </td>        
                <td  className={description[1][4]} onClick={this.getCarParkSlot.bind(this,i,4,description[1][4])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][5]} onClick={this.getCarParkSlot.bind(this,i,5,description[1][5])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][6]} onClick={this.getCarParkSlot.bind(this,i,6,description[1][6])}>
                <p key={i}>  </p>
                </td>     
                <td  className={description[1][7]} onClick={this.getCarParkSlot.bind(this,i,7,description[1][7])}>
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
               <h1>Car parking</h1><br/>
               <p>{this.props.match.params.eventId}</p>
                <p>{this.props.match.params.showId}</p>
                <p>{this.props.match.params.orderId}</p>
                <p>Car Price - {this.state.carprice}</p>
                <p>threewheeler Price - {this.state.threewheelerprice}</p>
                <div className="col-lg-12">
                                    <div className="col-lg-2">Preview</div> 
                                    <div className="col-lg-8">{m}</div>
                                    </div>
                
                <div><button className="btn btn-default" onClick={this.updateCarParking}>Submit</button></div>

                <Link className="btn btn-default" to={`/FoodsReserve/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Go to the Food Reserve</Link>

            </div>
        );
    }
}

export default Carparking;