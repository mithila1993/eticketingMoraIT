import React, { Component } from 'react';
import * as firebase from 'firebase';
import Userregister from './Entersite/Userregister';
import Eventregister from './Entersite/Eventregister';
import Login from './Entersite/Login';
import Account from './Account';
import axios from 'axios';
import Usermain from './User/Usermain';
import Eventorganizermain from './Eventorganizer/Eventorganizermain';
import Adminmain from './Admin/Adminmain';

//var user;

class Accountmain extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            isloggin: {},
            accountmenu:4,
            chooseuser:{},
            user:{}
        }
        this.changeMenuLink = this.changeMenuLink.bind(this);
        this.chooseUser = this.chooseUser.bind(this);
        
    }

    changeMenuLink(value){
        this.setState({
            accountmenu:value,
        });
        
    }

    
    componentDidMount() {
        this.setState({
            user : firebase.auth().currentUser
        });
        
    }
    

    chooseUser(typedemail){
        
        axios.post('http://localhost:3002/chooseUser', {
            email: typedemail,
        })
        .then( (response) => {
        this.setState({chooseuser: response.data});

        })
        .catch( (error) => {
        console.log("choose user",error);
        });

        if(this.state.chooseuser==="Event Organizer"){
            return <Eventorganizermain/>
        }if(this.state.chooseuser==="User"){
                return <Usermain/>
        }if(this.state.chooseuser==="Admin"){
            return <Adminmain/>
        }
    }
    
    render() {

        // user = firebase.auth().currentUser;
        var accmenu;
        if(this.state.user){
            accmenu = this.chooseUser(this.state.user.email);
        }else{
            if(this.state.accountmenu===4){
            accmenu = <Login menulink={this.changeMenuLink}/>
            }if(this.state.accountmenu===5){
            accmenu = <Eventregister menulink={this.changeMenuLink}/>
            }if(this.state.accountmenu===6){
            accmenu = <Userregister menulink={this.changeMenuLink}/>
            }
        }
        
        
        return (
            <div>
                {accmenu}
            </div>
        );
    }
}

export default Accountmain;