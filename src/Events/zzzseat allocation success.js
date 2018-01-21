import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import JsonTable from 'react-json-table';
import axios from 'axios';
import { Link } from 'react-router-dom';

var j1 = {1: {
    1: 'clear', 
    2: 'clear',
    3: 'clear',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},2: {
    1: 'clear', 
    2: 'clear',
    3: 'clear',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},3: {
    1: 'clear', 
    2: 'clear',
    3: 'clear',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},4: {
    1: 'clear', 
    2: 'clear',
    3: 'clear',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},

};

var j3 = {1: {
    1: 'vip', 
    2: 'vip',
    3: 'vip',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},2: {
    1: 'clear', 
    2: 'vip',
    3: 'clear',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},3: {
    1: 'clear', 
    2: 'clear',
    3: 'clear',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},4: {
    1: 'clear', 
    2: 'clear',
    3: 'clear',
    4: 'clear',
    5: 'clear',
    6: 'clear',
    7: 'clear',
},};

var j2 = {1: {},
2: {},
3: {},
4: {},
};

let rows = [];

var j4 = {}

var m = 0;


class Seatallocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seatCategory:"Clear",
            datas :{}
        }
        // this.loadtable = this.loadtable.bind(this);
    }

    mouseDown(value1,value2){
        console.log('mousedown1',value1 );
        console.log('mousedown2',value2 );
    }

    mouseUp(value1,value2){
        console.log('mouseup1',value1 );
        console.log('mouseup2',value2 );
    }

    
    // loadtable(value1){
    //     console.log('loaded');
    //     for (var i = 1; i <= 4; i++){
    //         let rowID = `row${i}`
    //     let cell = []
    //         for (var idx = 1; idx <= 7; idx++){
    //         let cellID = `cell${i}-${idx}`
    //         cell.push(<td className={j4[i][idx]} key={cellID} id={cellID} onClick={this.tableclick.bind(this,i,idx)}>{value1}</td>)
    //             }
    //     rows.push(<tr id={rowID}>{cell}</tr>)
    //     }
    // }

    // componentWillMount() {
    //     this.loadtable("p");
    // }
    

    componentWillMount() {
        axios.post('http://localhost:3002/displaySeatAllocation', {
            eventid: this.props.match.params.eventId,
            showid: this.props.match.params.showId
          })
          .then( (response) => {
            
            // j4 = response.data.data;
            // console.log('j4',j4);
            // m =1;

            this.setState({datas: response.data.data});
            console.log(this.state.datas);
            
          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }


    submitSeats(){
        axios.post('http://localhost:3002/reserveSeats', {
            orderid :this.props.match.params.orderId,
            seats :j2
          })
          .then(function (response) {
            
            console.log("event response",response);

          })
          .catch(function (error) {
            console.log("event error",error);
          });
    }
    
    editJson(value1,value2){
        
        // firebase.database().ref('react/temp').set(
        //    {j1}
        //   );
        j2[value1][value2] = this.state.seatCategory;
        
        console.log(j2);
    }

seatCategory(value){
        this.setState({
            seatCategory:value,
        });

    }
    
    tableclick(value1,value2){
        console.log('1',value1);
        console.log('2',value2);
        j3[value1][value2] = 'vip';
        console.log(j3);
        rows = [];
        // this.loadtable("q");
    }

    name(value1,value2){
        console.log('mello1',value1);
        console.log('mello2',value2);
        // this.setState({
        //     datas :{...this.state.datas,
        //         [value1]: {...this.state.datas.$value1,
        //             [value2]:'VIP'
        //         }
        //     }
        // });
        let jasper = Object.assign({}, this.state.datas); 
        
        // if(jasper[value1][value2] === 'clear'){
            
        // };   
        if(jasper[value1][value2] === 'VIP'){
            jasper[value1][value2] = 'clear'
        }else if(jasper[value1][value2] === 'clear'){
            jasper[value1][value2] = 'VIP'
        }                  
        this.setState({jasper});
        console.log(this.state.datas);   
    }


    render() {
        console.log('j4-1',j4);
        console.log('m',m);
        // for (var i = 1; i <= 4; i++){
        //     let rowID = `row${i}`
        // let cell = []
        //     for (var idx = 0; idx <= 7; idx++){
        //     let cellID = `cell${i}-${idx}`
        //     cell.push(<td className={j4[i][idx]} key={cellID} id={cellID} onClick={this.tableclick.bind(this,i,idx)}></td>)
        //         }
        // rows.push(<tr id={rowID}>{cell}</tr>)
        // }
        
         return (
            <div className="container-new">
               <h1>Seat Allocation</h1><br/> 
               <p>{this.props.match.params.eventId}</p>
               <p>{this.props.match.params.showId}</p>
               <p>{this.props.match.params.orderId}</p>
               <div>
               {/*  <table className="allocate">
                        
                        <tr>
                            <td className="vip" onClick={this.editJson.bind(this,"1","1")} onMouseDown={this.mouseDown.bind(this,"r1","c1")} onMouseUp={this.mouseUp.bind(this,"r1","c1")}></td>
                            <td className="vip" onClick={this.editJson.bind(this,"1","2")} onMouseDown={this.mouseDown.bind(this,"r1","c2")} onMouseUp={this.mouseUp.bind(this,"r1","c2")}></td> 
                            <td onClick={this.editJson.bind(this,"1","3")} onMouseDown={this.mouseDown.bind(this,"r1","c3")} onMouseUp={this.mouseUp.bind(this,"r1","c3")}></td>
                            <td onClick={this.editJson.bind(this,"1","4")} onMouseDown={this.mouseDown.bind(this,"r1","c4")} onMouseUp={this.mouseUp.bind(this,"r1","c4")}></td>
                            <td onClick={this.editJson.bind(this,"1","5")} onMouseDown={this.mouseDown.bind(this,"r1","c5")} onMouseUp={this.mouseUp.bind(this,"r1","c5")}></td>
                            <td onClick={this.editJson.bind(this,"1","6")} onMouseDown={this.mouseDown.bind(this,"r1","c6")} onMouseUp={this.mouseUp.bind(this,"r1","c6")}></td>
                            <td onClick={this.editJson.bind(this,"1","7")} onMouseDown={this.mouseDown.bind(this,"r1","c7")} onMouseUp={this.mouseUp.bind(this,"r1","c7")}></td>
                        </tr>
                        <tr>
                            <td onClick={this.editJson.bind(this,"2","1")}></td>
                            <td onClick={this.editJson.bind(this,"2","2")}></td> 
                            <td onClick={this.editJson.bind(this,"2","3")}></td>
                            <td onClick={this.editJson.bind(this,"2","4")}></td>
                            <td onClick={this.editJson.bind(this,"2","5")}></td>
                            <td onClick={this.editJson.bind(this,"2","6")}></td>
                            <td onClick={this.editJson.bind(this,"2","7")}></td>
                        </tr>
                        <tr>
                            <td onClick={this.editJson.bind(this,"3","1")}></td>
                            <td onClick={this.editJson.bind(this,"3","2")}></td> 
                            <td onClick={this.editJson.bind(this,"3","3")}></td>
                            <td onClick={this.editJson.bind(this,"3","4")}></td>
                            <td onClick={this.editJson.bind(this,"3","5")}></td>
                            <td onClick={this.editJson.bind(this,"3","6")}></td>
                            <td onClick={this.editJson.bind(this,"3","7")}></td>
                        </tr>
                        <tr>
                            <td onClick={this.editJson.bind(this,"4","1")}></td>
                            <td onClick={this.editJson.bind(this,"4","2")}></td> 
                            <td onClick={this.editJson.bind(this,"4","3")}></td>
                            <td onClick={this.editJson.bind(this,"4","4")}></td>
                            <td onClick={this.editJson.bind(this,"4","5")}></td>
                            <td onClick={this.editJson.bind(this,"4","6")}></td>
                            <td onClick={this.editJson.bind(this,"4","7")}></td>
                        </tr>

                        </table>
                        <button onClick={this.seatCategory.bind(this,"VIP")}>VIP</button>
                        <button onClick={this.seatCategory.bind(this,"ODC")}>ODC</button>
                        <h1>You selected {this.state.seatCategory}</h1>

                        <button onClick={this.submitSeats.bind(this)}>Submit</button>
                        
                        <Link className="btn btn-default" to={`/FoodsReserve/${this.props.match.params.eventId}/${this.props.match.params.showId}/${this.props.match.params.orderId}`}>Book Foods</Link>
                        
                        <p>Hello</p> */}
                        {/* <section id="seats">
                        <input id="seat-1" className="seat-select" type="checkbox" value="1" name="seat[]" ></input>
                        <label forHtml="seat-1" className="seat"></label>
                        <input id="seat-2" className="seat-select" type="checkbox" value="2" name="seat[]" />
                        <label forHtml="seat-2" className="seat"></label>
                        <input id="seat-3" className="seat-select" type="checkbox" value="3" name="seat[]" />
                        <label forHtml="seat-3" className="seat"></label>
                        <input id="seat-4" className="seat-select" type="checkbox" value="4" name="seat[]" />
                        <label forHtml="seat-4" className="seat"></label> 
                      </section>*/}
                        <table>
                        <tbody>
                        { Object.entries(this.state.datas).map((description, i) => {  
                                return (
                    
                                    <div>
                                <div>
                                 {/* {console.log('description',description[1][0])}  */}
                                {/* {description[1][3]}  */}
                                 <tr>
                                <td key={i} className={description[1][0]} onClick={this.name.bind(this,i,0)}>
                                <p  > {description[1][0]}</p>
                                </td>
                                <td className={description[1][1]} onClick={this.name.bind(this,i,1)}>
                                <p key={i}> {description[1][1]} </p>
                                </td>
                                <td  className={description[1][2]} onClick={this.name.bind(this,i,2)}>
                                <p key={i}> {description[1][2]} </p>
                                </td> 
                                <td  className={description[1][3]} onClick={this.name.bind(this,i,3)}>
                                <p key={i}> {description[1][3]} </p>
                                </td>        
                                <td  className={description[1][4]} onClick={this.name.bind(this,i,4)}>
                                <p key={i}> {description[1][4]} </p>
                                </td>     
                                <td  className={description[1][5]} onClick={this.name.bind(this,i,5)}>
                                <p key={i}> {description[1][5]} </p>
                                </td>     
                                <td  className={description[1][6]} onClick={this.name.bind(this,i,6)}>
                                <p key={i}> {description[1][6]} </p>
                                </td>     
                                <td  className={description[1][7]} onClick={this.name.bind(this,i,7)}>
                                <p key={i}> {description[1][7]} </p>
                                </td>  
                                </tr>
                                </div>
                                </div>
                                        )
                                })}
    
                        {/* {rows} */}
                        
                        </tbody>
                        </table>
            </div>
            </div>
        );
    }
}

export default Seatallocation;