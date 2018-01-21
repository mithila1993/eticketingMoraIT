import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

class Carparking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas:{},
            Carparking:{}
        }
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
            this.setState(prevState => ({
                odcprice: prevState.odcprice + this.state.datas.odcprice
              }));
        }if(value3==='odc-reserved'){
            let jasper = Object.assign({}, this.state.datas.seats);
            console.log(this.state.datas);
            jasper[value1][value2] = 'odc';
            this.setState({jasper});
            this.setState(prevState => ({
                odcprice: prevState.odcprice - this.state.datas.odcprice
              }));
        }
    
    }


    componentWillMount() {
        axios.post('http://localhost:3002/displayShowDetailsToUser', {
            eventid:this.props.match.params.eventId,
            showid:this.props.match.params.showId
                })
                .then( (response) => {
                  this.setState({datas: response.data.data},() => {
                        axios.post('http://localhost:3002/displayCarParkOnUser', {
                                carparkid:this.state.datas.carparkingid,
                                date:this.state.datas.date
                            })
                            .then( (response) => {
                              this.setState({carparking: response.data.carparkslot},() => {
                                console.log('hello -',response.data.carparkslot);
                                               });
                              
                            })
                            .catch( (error) => {
                              console.log("car",error);
                            });
                    });
                    console.log(response.data.data);
                    console.log(this.state.datas);
                  
                })
                .catch( (error) => {
                  console.log("zzz",error);
                });
        // axios.post('http://localhost:3002/eeeee', {
        //     eventid:this.props.match.params.eventId,
        //     showid:this.props.match.params.showId
        //         })
        //         .then( (response) => {
        //           this.setState({datas: response.data.data});
        //           console.log(response.data);
        //         })
        //         .catch( (error) => {
        //           console.log("kkkkk",error);
        //         });

    }

    render() {

        if(this.state.carparking !== undefined){
            var m =  Object.entries(this.state.carparking).map((description, i) => {  
        
                return (
                  
                    <div>
                <div>
                 <tr>
                <td key={i} className={description[1][0]} onClick={this.getSeatNum.bind(this,i,0,description[1][0])}>
                <p  >{description[1][0]} {i}</p>
                </td>
                <td className={description[1][1]} onClick={this.getSeatNum.bind(this,i,1,description[1][1])}>
                <p key={i}> {description[1][1]} </p>
                </td>
                <td  className={description[1][2]} onClick={this.getSeatNum.bind(this,i,2,description[1][2])}>
                <p key={i}> {description[1][2]} </p>
                </td> 
                <td  className={description[1][3]} onClick={this.getSeatNum.bind(this,i,3,description[1][3])}>
                <p key={i}> {description[1][3]} </p>
                </td>        
                <td  className={description[1][4]} onClick={this.getSeatNum.bind(this,i,4,description[1][4])}>
                <p key={i}> {description[1][4]} </p>
                </td>     
                <td  className={description[1][5]} onClick={this.getSeatNum.bind(this,i,5,description[1][5])}>
                <p key={i}> {description[1][5]} </p>
                </td>     
                <td  className={description[1][6]} onClick={this.getSeatNum.bind(this,i,6,description[1][6])}>
                <p key={i}> {description[1][6]} </p>
                </td>     
                <td  className={description[1][7]} onClick={this.getSeatNum.bind(this,i,7,description[1][7])}>
                <p key={i}> {description[1][7]} </p>
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
                <div className="col-lg-12">
                                    <div className="col-lg-2">Preview</div> 
                                    <div className="col-lg-8">{m}</div>
                                    </div>
                <Link className="btn btn-default" to={`/FoodsReserve/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Go to the Food Reserve</Link>

            </div>
        );
    }
}

export default Carparking;