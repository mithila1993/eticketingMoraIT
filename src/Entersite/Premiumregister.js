import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';



class Eventregister extends Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            setRole:''
        };
        this.register = this.register.bind(this);
        this.temp = this.temp.bind(this);
    
    }


    createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
            NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Title here');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };

    register(e){
        e.preventDefault(); 
        const nameRegistered = this.refs.inputName.value;
        const emailRegistered = this.refs.inputEmail.value;
        const passRegistered = this.refs.inputPassword.value;
        const roleRegistered = this.state.setRole;

    
        console.log('button clicked');

        axios.post('http://localhost:3002/createUser', {
            name: nameRegistered,
            email: emailRegistered,
            pass :passRegistered,
            role :roleRegistered,
            

          })
          .then(function (response) {
            NotificationManager.success('Successfully Account Created');
            console.log(response);
          })
          .catch(function (error) {
            console.log("Mello",error);
          });
        
       //this.props.history.push('/success');
        
    }

    temp(){
        
    }

    setRole(event) {
        this.setState({
            setRole: event.target.value + 'Unapprove'
        });
    }
        

    render() {
        
        return (
            <div className="container  backimage">

            <div className="container-new login">
                <form className="form-horizontal">
                <fieldset>
                      <legend><h1>Premium Register</h1></legend>
                            <div className="form-group">
                                    <label htmlFor="inputName" className="col-lg-2 control-label">Name</label>
                                    <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputName" placeholder="Name" ref="inputName"/>
                                    </div>
                                    
                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                    <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="inputEmail"/>
                                    </div>
                                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                                    <div className="col-lg-10">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref="inputPassword"/>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10 form-check">
                                    <div onChange={this.setRole.bind(this)}>
                                    <input type="radio" value="EventOrganizer" name="gender"/> Event Organizer<br/>
                                    <input type="radio" value="CarParkOwner" name="gender"/> Car Park Owner<br/>
                                    <input type="radio" value="ShopOwner" name="gender"/> Shop Owner<br/>
                                    </div>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10">

                                    <button type="submit" className="btn btn-default" onClick={this.register}>Register</button>
                                    </div>
                            </div>
                </fieldset>
          </form>
            </div>
            </div>
        );
    }
}

export default Eventregister;