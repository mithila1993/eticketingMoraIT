import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import JsonTable from 'react-json-table';
import axios from 'axios';
import {withRouter} from 'react-router';
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

class Seats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seatCategory:"Clear",
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


    submitSeats(){
        console.log(this.props.match.params.eventid);
        console.log(this.props.match.params.showid);
        axios.post('http://localhost:3002/addSeats', {
            eventid :this.props.match.params.eventid,
            showid :this.props.match.params.showid,
            seats :j1
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
        j1[value1][value2] = this.state.seatCategory;
        
        console.log(j1);
    }

seatCategory(value){
        this.setState({
            seatCategory:value,
        });

    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                {this.props.match.params.eventid}
                <h1>{this.props.match.params.showid}</h1>
                <div>
                <table className="allocate">
                        
                        <tr>
                            <td onClick={this.editJson.bind(this,"1","1")} onMouseDown={this.mouseDown.bind(this,"r1","c1")} onMouseUp={this.mouseUp.bind(this,"r1","c1")}></td>
                            <td onClick={this.editJson.bind(this,"1","2")} onMouseDown={this.mouseDown.bind(this,"r1","c2")} onMouseUp={this.mouseUp.bind(this,"r1","c2")}></td> 
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
                        
                       

            </div>
            </div>
        );
    }
}

export default Seats;

//<Link className="btn btn-default" to={`/Foods/${this.props.match.params.eventid}/${this.props.match.params.showid}`}>Seat Allocations</Link>