import React, { Component } from 'react';
import Eventlist from './Events/Eventlist';
import Eventdetails from './Events/Eventdetails';
import Seatallocation from './Events/Seatallocation';
import Checkout from './Events/Checkout';
import Carparking from './Events/Carparking';
import Beverages from './Events/Beverages';

var eventmenu;

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventlink:1,
            eventid:0,
        }
        this.changeeventlinkid = this.changeeventlinkid.bind(this);
    }

    changeeventlinkid(value1, value2){
        this.setState({
            eventlink:value1,
            eventid:value2,
        });
    }
    
    
    render() {
        if(this.state.eventlink===1){
            eventmenu = <Eventlist eventmenu={this.changeeventlinkid}/>
            }if(this.state.eventlink===2){
            eventmenu = <Eventdetails eventmenu={this.changeeventlinkid} eventid={this.state.eventid}/>
            }if(this.state.eventlink===3){
            eventmenu = <Seatallocation eventmenu={this.changeeventlinkid} eventid={this.state.eventid}/>
            }if(this.state.eventlink===4){
            eventmenu = <Carparking eventmenu={this.changeeventlinkid} eventid={this.state.eventid}/>
            }if(this.state.eventlink===5){
            eventmenu = <Beverages eventmenu={this.changeeventlinkid} eventid={this.state.eventid}/>
            }if(this.state.eventlink===6){
            eventmenu = <Checkout eventmenu={this.changeeventlinkid} eventid={this.state.eventid}/>
            }

        return (
            <div>
                {eventmenu}
            </div>
        );
    }
}


export default Events;