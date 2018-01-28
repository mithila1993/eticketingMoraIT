import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Createcarpark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            venue:'Savoy',
            carparkslotCategory:"Clear",
            datas :{0: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },1: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },2: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },3: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },4: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },5: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },6: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },7: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },8: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },9: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },10: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },11: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },12: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },13: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },14: {
                0: 'erase',
                1: 'erase', 
                2: 'erase',
                3: 'erase',
                4: 'erase',
                5: 'erase',
                6: 'erase',
                7: 'erase',
                8: 'erase',
                9: 'erase',
                10: 'erase',
                11: 'erase',
                12: 'erase',
                13: 'erase',
                14: 'erase',
            },
            
            },
            tool :"not mentioned",
            id: false,
            mousei:0,
            mousej:0,
            x:0,
            y:0
        }
        
    }

    carparkslotall(value){
        this.setState({
            tool:value
        });
    }

    getSeatNum(value1,value2){
        console.log('value1',value1 );
        console.log('value2',value2 );
        this.setState({
            x:value1,
            y:value2
        });
    if(this.state.tool=='car-square'){
        if(this.state.id=== true){
        for(var i = this.state.mousei ; i <= value1; i++){
            for(var j = this.state.mousej ; j <= value2; j++){
            console.log("i " + i + " j " +j);
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[i][j] = 'car';
            this.setState({jasper});
            }
        }
        }
    }else if(this.state.tool=='threewheeler-square'){
        if(this.state.id=== true){
        for(var i = this.state.mousei ; i <= value1; i++){
            for(var j = this.state.mousej ; j <= value2; j++){
            console.log("i " + i + " j " +j);
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[i][j] = 'threewheeler';
            this.setState({jasper});
            }
        }
        }
    }else if(this.state.tool=='eraser-square'){
        if(this.state.id=== true){
        for(var i = this.state.mousei ; i <= value1; i++){
            for(var j = this.state.mousej ; j <= value2; j++){
            console.log("i " + i + " j " +j);
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[i][j] = 'erase';
            this.setState({jasper});
            }
        }
        }
    }else if(this.state.tool=='car-pen'){
        if(this.state.id=== true){
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[value1][value2] = 'car';
            this.setState({jasper});
            
        
        }
    }else if(this.state.tool=='threewheeler-pen'){
        if(this.state.id=== true){
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[value1][value2] = 'threewheeler';
            this.setState({jasper});
            
        
        }
    }else if(this.state.tool=='eraser-pen'){
        if(this.state.id=== true){
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[value1][value2] = 'erase';
            this.setState({jasper});
            
        
        }
    }
    }

    mouseDown(value1,value2){
        console.log('mousedown1',value1 );
        console.log('mousedown2',value2 );
    }

    mouseUp(value1,value2){
        console.log('mouseup1',value1 );
        console.log('mouseup2',value2 );
    }    

carparkslotCategory(value){
        this.setState({
            carparkslotCategory:value,
        });

    }
    
    

    name(value1,value2){
        console.log('mello1',value1);
        console.log('mello2',value2);
        this.setState({
            id: !this.state.id,
            mousei:value1,
            mousej:value2
        });
        console.log(this.state.datas);
        console.log(this.state.id);   
    }

    submitcarparkslot(){
            axios.post('http://localhost:3002/addCarParks', {
                name: this.refs.inputName.value,
                carparkslots:this.state.datas,
                venue:this.state.venue,
                carprice: this.refs.inputCar.value,
                threewheelerprice: this.refs.inputThreewheeler.value,
                
              })
              .then(function (response) {
                NotificationManager.success('Successfully Car Park Created');
                console.log("event response",response);
              })
              .catch(function (error) {
                console.log("event error",error);
              });

    }

    handleVenue(e){
        this.setState({venue:e.target.value});   
    }


    render() {
        return (
            <div className="container-new">
               <h1>Create Car Park </h1><br/> 
               <div>
            <form className="form-horizontal">
                  <fieldset>
                        
                              <div className="form-group">
                              <div className="col-lg-12">
                              <label htmlFor="inputEmail" className="col-lg-2 control-label">Venue</label>
                              <div className="col-lg-8">
                              <select className="form-control" onChange={this.handleVenue.bind(this)} >
                                    <option value="Savoy">Savoy</option>
                                    <option value="Liberty">Liberty</option>
                                    <option value="Majestic City">Magestic City</option>
                                    
                                    </select>
                                    </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Name</label>
                                      <div className="col-lg-8">
                                      <input type="text" className="form-control" id="inputName" placeholder="Carpark Name" ref="inputName"/>
                                      </div>
                                      </div>

                                      <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Car price</label>
                                      <div className="col-lg-8">
                                      <input type="text" className="form-control" id="inputName" placeholder="Carpark Name" ref="inputCar"/>
                                      </div>
                                      </div>

                                      <div className="col-lg-12">
                                      <label htmlFor="inputEmail" className="col-lg-2 control-label">Threewheeler price</label>
                                      <div className="col-lg-8">
                                      <input type="text" className="form-control" id="inputName" placeholder="Carpark Name" ref="inputThreewheeler"/>
                                      </div>
                                      </div>
                              </div>
                  </fieldset>
            </form>
  </div>                 

               <div>
               
                        <table>
                        <tbody>
                        <div className="seats">
                            <div  className="col-lg-12">
                            <div className="col-md-12 informationbar">
                                    <div  className="col-lg-4">
                                    <h4>Navigation Details </h4>
                                    Row:{this.state.x + 1}<br/>
                                    Col:{this.state.y + 1}<br/>
                                    </div>
                                    <div  className="col-lg-4">
                                    <h4>Tool Details </h4>
                                    Tool:{this.state.tool} <br/>
                                    Activation:{this.state.id?"Activated":"Not Activated"}<br/>
                                    </div>
                                    <div  className="col-lg-4">
                                    <button className="btn btn-primary btn-lg submitbuttoncreateevent" onClick={this.submitcarparkslot.bind(this)}>Submit The Car Parking</button>
                                    </div>
                            </div>
                            <div  className="col-lg-1">
                            
                            <button className="toolbutton" onClick={this.carparkslotall.bind(this,'car-square')}>car Square</button>
                            <button className="toolbutton" onClick={this.carparkslotall.bind(this,'threewheeler-square')}>Trishaw Square</button><br/>
                            <button className="toolbutton" onClick={this.carparkslotall.bind(this,'eraser-square')}>Eraser Square</button><br/>
                            <button className="toolbutton" onClick={this.carparkslotall.bind(this,'car-pen')}>car Pen</button><br/>
                            <button className="toolbutton" onClick={this.carparkslotall.bind(this,'threewheeler-pen')}>Trishaw Pen</button><br/>
                            <button className="toolbutton" onClick={this.carparkslotall.bind(this,'eraser-pen')}>Eraser Pen</button><br/>
                            </div>
                            <div  className="col-lg-11">
                        
                        { Object.entries(this.state.datas).map((description, i) => {  
                                return (
                    
                                    <div>
                                <div>
                                 {/* {console.log('description',description[1][0])}  */}
                                {/* {description[1][3]}  */}
                                 <tr>
                                <td key={i} className={description[1][0]} onClick={this.name.bind(this,i,0)} onMouseOver={this.getSeatNum.bind(this,i,0)}>
                                <p  > </p>
                                </td>
                                <td className={description[1][1]} onClick={this.name.bind(this,i,1)} onMouseOver={this.getSeatNum.bind(this,i,1)}>
                                <p key={i}> </p>
                                </td>
                                <td  className={description[1][2]} onClick={this.name.bind(this,i,2)} onMouseOver={this.getSeatNum.bind(this,i,2)}>
                                <p key={i}> </p>
                                </td> 
                                <td  className={description[1][3]} onClick={this.name.bind(this,i,3)} onMouseOver={this.getSeatNum.bind(this,i,3)}>
                                <p key={i}> </p>
                                </td>        
                                <td  className={description[1][4]} onClick={this.name.bind(this,i,4)} onMouseOver={this.getSeatNum.bind(this,i,4)}>
                                <p key={i}> </p>
                                </td>     
                                <td  className={description[1][5]} onClick={this.name.bind(this,i,5)} onMouseOver={this.getSeatNum.bind(this,i,5)}>
                                <p key={i}> </p>
                                </td>     
                                <td  className={description[1][6]} onClick={this.name.bind(this,i,6)} onMouseOver={this.getSeatNum.bind(this,i,6)}>
                                <p key={i}> </p>
                                </td>     
                                <td  className={description[1][7]} onClick={this.name.bind(this,i,7)} onMouseOver={this.getSeatNum.bind(this,i,7)}>
                                <p key={i}> </p>
                                </td>  
                                <td  className={description[1][8]} onClick={this.name.bind(this,i,8)} onMouseOver={this.getSeatNum.bind(this,i,8)}>
                                <p key={i}> </p>
                                </td>  
                                <td  className={description[1][9]} onClick={this.name.bind(this,i,9)} onMouseOver={this.getSeatNum.bind(this,i,9)}>
                                <p key={i}> </p>
                                </td>  
                                <td  className={description[1][10]} onClick={this.name.bind(this,i,10)} onMouseOver={this.getSeatNum.bind(this,i,10)}>
                                <p key={i}> </p>
                                </td>  
                                <td  className={description[1][11]} onClick={this.name.bind(this,i,11)} onMouseOver={this.getSeatNum.bind(this,i,11)}>
                                <p key={i}> </p>
                                </td>  
                                <td  className={description[1][12]} onClick={this.name.bind(this,i,12)} onMouseOver={this.getSeatNum.bind(this,i,12)}>
                                <p key={i}> </p>
                                </td>  
                                <td  className={description[1][13]} onClick={this.name.bind(this,i,13)} onMouseOver={this.getSeatNum.bind(this,i,13)}>
                                <p key={i}> </p>
                                </td>  
                                <td  className={description[1][14]} onClick={this.name.bind(this,i,14)} onMouseOver={this.getSeatNum.bind(this,i,14)}>
                                <p key={i}> </p>
                                </td>    
                                </tr>
                                </div>
                                </div>
                                        )
                                })}
                       </div>
                       {/* {rows} */}
                       </div>
                       </div>
                        </tbody>
                        </table>
                        <button onClick={this.carparkslotall.bind(this,'car-square')}>car Square</button>
                        <button onClick={this.carparkslotall.bind(this,'threewheeler-square')}>threewheeler Square</button>
                        <button onClick={this.carparkslotall.bind(this,'eraser-square')}>Eraser Square</button>
                        <button onClick={this.carparkslotall.bind(this,'car-pen')}>car pen</button>
                        <button onClick={this.carparkslotall.bind(this,'threewheeler-pen')}>threewheeler pen</button>
                        <button onClick={this.carparkslotall.bind(this,'eraser-pen')}>eraser pen</button>
                        
                        <button onClick={this.submitcarparkslot.bind(this)}>submit</button>
                        <p>{this.state.tool}</p>
                        <p>{this.state.id}</p>

            </div>
            </div>
        );
    }
}

export default Createcarpark;