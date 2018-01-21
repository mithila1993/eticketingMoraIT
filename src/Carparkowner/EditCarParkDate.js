import React, { Component } from 'react';
import axios from 'axios';

class EditCarParkDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: {},   
        }
        this.updateCarParkDate = this.updateCarParkDate.bind(this);
    } 

    updateCarParkDate(){
        axios.post('http://localhost:3002/updateCarParkDate', {
            carparkid: this.props.match.params.carparkid,
            carparkdateid: this.props.match.params.carparkdateid,
            seats:this.state.datas,
            
            
          })
          .then(function (response) {
            
            console.log("event response",response);
          })
          .catch(function (error) {
            console.log("event error",error);
          });
}

handleVenue(e){
    this.setState({venue:e.target.value});   
}    

    componentWillMount() {
        var places=axios.post('http://localhost:3002/editCarParkDates', {
            carparkid: this.props.match.params.carparkid,
            carparkdateid: this.props.match.params.carparkdateid,
                    })
                    .then( (response) => {
                      this.setState({datas: response.data.data});
                      console.log(this.state.datas);
                    })
                    .catch( (error) => {
                      console.log("event error",error);
                    });
    
    }

    getSeatNum(value1,value2,value3){
        console.log('value1',value1 );
        console.log('value2',value2 );
        console.log('value2',value3 );
        if(value3==='car'){
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[value1][value2] = 'car-reserved';
            this.setState({jasper});
        }if(value3==='car-reserved'){
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[value1][value2] = 'car';
            this.setState({jasper});
        }if(value3==='threewheeler'){
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[value1][value2] = 'threewheeler-reserved';
            this.setState({jasper});
        }if(value3==='threewheeler-reserved'){
            let jasper = Object.assign({}, this.state.datas);
            console.log(this.state.datas);
            jasper[value1][value2] = 'threewheeler';
            this.setState({jasper});
        }
    // if(this.state.tool=='VIP-square'){
    //     if(this.state.id=== true){
    //     for(var i = this.state.mousei ; i <= value1; i++){
    //         for(var j = this.state.mousej ; j <= value2; j++){
    //         console.log("i " + i + " j " +j);
    //         let jasper = Object.assign({}, this.state.datas);
    //         console.log(this.state.datas);
    //         jasper[i][j] = 'VIP';
    //         this.setState({jasper});
    //         }
    //     }
    }


    render() {

        var m =  Object.entries(this.state.datas).map((description, i) => {  
        
            return (
              
                <div>
            <div>
             {/* {console.log('description',description[1][0])}  */}
            {/* {description[1][3]}  */}
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

        return (
            <div>
                Edit Car Park Date
                <p>{this.props.match.params.carparkid}</p>
                <p>{this.props.match.params.carparkdateid}</p>
                <div className="col-lg-12">
                                    <div className="col-lg-2">Preview</div> 
                                    <div className="col-lg-8">{m}</div>
                                    </div>
            <div><button className="btn btn-default" onClick={this.updateCarParkDate}>Submit</button></div>
                
            </div>
        );
    }
}

export default EditCarParkDate;