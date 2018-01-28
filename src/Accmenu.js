import React, { Component } from 'react';
import * as firebase from 'firebase';
import axios from 'axios';
import Usermain from './User/Usermain';
import Eventorganizermain from './Eventorganizer/Eventorganizermain';
import Adminmain from './Admin/Adminmain';
import Unapproved from './Entersite/Unapproved';
import Deleted from './Entersite/Deleted';
import Shopownermain from './Shopowner/Shopownermain';
import Carparkownermain from './Carparkowner/Carparkownermain';

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{}
        }
        this.chooseUser = this.chooseUser.bind(this);
        this.signout = this.signout.bind(this);
    }

    signout(e){
        e.preventDefault(); 
        firebase.auth().signOut().then(() => {
            this.props.changeLog(0);
          }).catch(function(error) {
            console.log(error);

          });
        //   <script type="text/javascript">
        //   setTimeout(function(){
        //     window.location = ''
        //   },60000)
        // </script>
          
      }
    
    componentWillMount() {
        this.setState({
            user : firebase.auth().currentUser
        });
        console.log('user check');
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

        if(this.state.chooseuser==="UserUnapprove"){
                return <Usermain/>
        }if(this.state.chooseuser==="Admin"){
            return <Adminmain/>
        }if(this.state.chooseuser==="EventOrganizerUnapprove"){
            return <Unapproved/>
        }if(this.state.chooseuser==="CarParkOwnerUnapprove"){
            return <Unapproved/>
        }if(this.state.chooseuser==="ShopOwnerUnapprove"){
            return <Unapproved/>
        }if(this.state.chooseuser==="EventOrganizerDelete"){
            return <Deleted/>
        }if(this.state.chooseuser==="CarParkOwnerDelete"){
            return <Deleted/>
        }if(this.state.chooseuser==="ShopOwnerDelete"){
            return <Deleted/>
        }if(this.state.chooseuser==="EventOrganizerApprove"){
            return <Eventorganizermain/>
        }if(this.state.chooseuser==="CarParkOwnerApprove"){
            return <Carparkownermain/>
        }if(this.state.chooseuser==="ShopOwnerApprove"){
            return <Shopownermain/>
        }

    }
    
    
    render() {
        var accmenu;
        if(this.state.user){
            accmenu = this.chooseUser(this.state.user.email);
        }
        return (
            <div>
                <div className="col-md-12 accountheader">
                <div className="col-md-2">
                {/* <h1 className="whitefont">Account</h1> */}
                <p className="accountname">Account</p>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-2">
                <p className="accountholdername">Hi.... {this.state.user.displayName}</p>
                </div>
                <div className="col-md-2 logout">
                <button className="btn btn-danger " onClick={this.signout}>Logout</button>
                </div>
                </div>
                
                {accmenu}
                
            </div>
        );
    }
}

export default Component1;