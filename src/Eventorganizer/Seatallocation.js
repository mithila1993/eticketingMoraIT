import React, { Component } from 'react';
import * as firebase from 'firebase';
import '../App.css';
import JsonTable from 'react-json-table';
import axios from 'axios';
import {withRouter} from 'react-router';

var j1 = {r1: {
    c1: 'clear', 
    c2: 'clear',
    c3: 'clear',
    c4: 'clear',
    c5: 'clear',
    c6: 'clear',
    c7: 'clear',
},r2: {
    c1: 'clear', 
    c2: 'clear',
    c3: 'clear',
    c4: 'clear',
    c5: 'clear',
    c6: 'clear',
    c7: 'clear',
},r3: {
    c1: 'clear', 
    c2: 'clear',
    c3: 'clear',
    c4: 'clear',
    c5: 'clear',
    c6: 'clear',
    c7: 'clear',
},r4: {
    c1: 'clear', 
    c2: 'clear',
    c3: 'clear',
    c4: 'clear',
    c5: 'clear',
    c6: 'clear',
    c7: 'clear',
},

        };

class Seatallocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seatCategory:"Not Mentioned",
        }
 
    }

submitSeats(){
    axios.post('http://localhost:3002/addSeats', {
        eventid :this.props.match.params.eventId,
        showid :this.props.match.params.showId,
        seats :j1
      })
      .then(function (response) {
        
        console.log("event response",response);
      })
      .catch(function (error) {
        console.log("event error",error);
      });
}

    mouseDown(value1,value2){
        console.log('mousedown1',value1 );
        console.log('mousedown2',value2 );
    }

    mouseUp(value1,value2){
        console.log('mouseup1',value1 );
        console.log('mouseup2',value2 );
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
        // var table = "Nimal";
        // var items = [
        //     { name: 'Louise', age: 27, color: 'red' },
        //     { name: 'Margaret', age: 15, color: 'blue'},
        //     { name: 'Lisa', age:34, color: 'yellow'}
        //   ];

        // var columns = [
        //     'name',
        //     {key: 'age', label: 'Age'},
        //     {key: 'color', label: 'Colourful', cell: function( item, columnKey ){
        //         return <span style={{color: item.color}}>{ item.color }</span>;
        //     }}
        // ];
        console.log(this.props.match);
        console.log(this.props.match.params.showid);
        
        return (
            // <div>
            //     <h1>Seatallocation</h1>
            //     <JsonTable rows={ items } columns={ columns } />
            // </div>




            <div>
                <table className="allocate">
                        
                        <tr>
                            <td onClick={this.editJson.bind(this,"r1","c1")} onMouseDown={this.mouseDown.bind(this,"r1","c1")} onMouseUp={this.mouseUp.bind(this,"r1","c1")}></td>
                            <td onClick={this.editJson.bind(this,"r1","c2")} onMouseDown={this.mouseDown.bind(this,"r1","c2")} onMouseUp={this.mouseUp.bind(this,"r1","c2")}></td> 
                            <td onClick={this.editJson.bind(this,"r1","c3")} onMouseDown={this.mouseDown.bind(this,"r1","c3")} onMouseUp={this.mouseUp.bind(this,"r1","c3")}></td>
                            <td onClick={this.editJson.bind(this,"r1","c4")} onMouseDown={this.mouseDown.bind(this,"r1","c4")} onMouseUp={this.mouseUp.bind(this,"r1","c4")}></td>
                            <td onClick={this.editJson.bind(this,"r1","c5")} onMouseDown={this.mouseDown.bind(this,"r1","c5")} onMouseUp={this.mouseUp.bind(this,"r1","c5")}></td>
                            <td onClick={this.editJson.bind(this,"r1","c6")} onMouseDown={this.mouseDown.bind(this,"r1","c6")} onMouseUp={this.mouseUp.bind(this,"r1","c6")}></td>
                            <td onClick={this.editJson.bind(this,"r1","c7")} onMouseDown={this.mouseDown.bind(this,"r1","c7")} onMouseUp={this.mouseUp.bind(this,"r1","c7")}></td>
                        </tr>
                        <tr>
                            <td onClick={this.editJson.bind(this,"r2","c1")}></td>
                            <td onClick={this.editJson.bind(this,"r2","c2")}></td> 
                            <td onClick={this.editJson.bind(this,"r2","c3")}></td>
                            <td onClick={this.editJson.bind(this,"r2","c4")}></td>
                            <td onClick={this.editJson.bind(this,"r2","c5")}></td>
                            <td onClick={this.editJson.bind(this,"r2","c6")}></td>
                            <td onClick={this.editJson.bind(this,"r2","c7")}></td>
                        </tr>
                        <tr>
                            <td onClick={this.editJson.bind(this,"r3","c1")}></td>
                            <td onClick={this.editJson.bind(this,"r3","c2")}></td> 
                            <td onClick={this.editJson.bind(this,"r3","c3")}></td>
                            <td onClick={this.editJson.bind(this,"r3","c4")}></td>
                            <td onClick={this.editJson.bind(this,"r3","c5")}></td>
                            <td onClick={this.editJson.bind(this,"r3","c6")}></td>
                            <td onClick={this.editJson.bind(this,"r3","c7")}></td>
                        </tr>
                        <tr>
                            <td onClick={this.editJson.bind(this,"r4","c1")}></td>
                            <td onClick={this.editJson.bind(this,"r4","c2")}></td> 
                            <td onClick={this.editJson.bind(this,"r4","c3")}></td>
                            <td onClick={this.editJson.bind(this,"r4","c4")}></td>
                            <td onClick={this.editJson.bind(this,"r4","c5")}></td>
                            <td onClick={this.editJson.bind(this,"r4","c6")}></td>
                            <td onClick={this.editJson.bind(this,"r4","c7")}></td>
                        </tr>

                        </table>
                        <button onClick={this.seatCategory.bind(this,"VIP")}>VIP</button>
                        <button onClick={this.seatCategory.bind(this,"ODC")}>ODC</button>
                        <h1>You selected {this.state.seatCategory}</h1>

                        <button onClick={this.submitSeats.bind(this)}>Submit</button>
                        


            </div>
        );
    }
}

export default Seatallocation;