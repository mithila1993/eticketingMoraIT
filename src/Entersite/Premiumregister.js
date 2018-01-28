import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import validator from 'validator';
import passwordValidator from 'password-validator';

var schema = new passwordValidator();



class Eventregister extends Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
            setRole:'UserUnapprove',
            fields: {
              email:'',
              name:'',
              phone:'',
              password:'',
              passwordconfirm:''
          },
          errors: {}
        };
        this.register = this.register.bind(this);
    
    }

    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      

      //Name
      if(validator.isEmpty(fields["name"])){
          formIsValid = false;
         errors["name"] = "Cannot be empty";
      }else if(!validator.isAlpha(fields["name"])){
          formIsValid = false;
         errors["name"] = "Only Letters";
      }

      //Email
      if(validator.isEmpty(fields["email"])){
          formIsValid = false;
         errors["email"] = "Cannot be empty";
      }else if(!validator.isEmail(fields["email"])){
          formIsValid = false;
         errors["email"] = "Email is not valid";
      }

      //Phone Number
      if(!validator.isInt(fields["phone"])){
          formIsValid = false;
         errors["phone"] = "There should be numbers";
      }
  
      //Password
      if(validator.isEmpty(fields["password"])){
          formIsValid = false;
         errors["password"] = "Cannot be empty";
      }else if(!schema.is().min(8).validate(fields["password"]) ){
          formIsValid = false;
         errors["password"] = "Minimum length 8";
      }else if(!schema.is().max(100).validate(fields["password"]) ){
          formIsValid = false;
         errors["password"] = "Maximum length 100";
      }else if(!schema.has().uppercase().validate(fields["password"]) ){
          formIsValid = false;
         errors["password"] = "Must have uppercase letters ";
      }else if(!schema.has().lowercase().validate(fields["password"]) ){
          formIsValid = false;
         errors["password"] = "Must have lowercase letters ";
      }else if(!schema.has().digits().validate(fields["password"]) ){
          formIsValid = false;
         errors["password"] = "Must have digits ";
      }else if(!schema.has().not().spaces().validate(fields["password"]) ){
          formIsValid = false;
         errors["password"] = "Should not have spaces";
      }

      // password confirm       
      if(validator.isEmpty(fields["password"]) && validator.isEmpty(fields["passwordconfirm"])){
          formIsValid = false;
         errors["passwordconfirm"] = "";
      }else if(!validator.equals(fields["password"],fields["passwordconfirm"])){
          formIsValid = false;
         errors["passwordconfirm"] = "Password Not Equal";
      }
      console.log(fields["password"]);
      console.log(fields["passwordconfirm"]);

     this.setState({errors: errors});
     return formIsValid;
 }


    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
        this.register();
      }else{
        NotificationManager.error('Form Error Found');
      }

  }

    handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value.toString();    
      this.setState({fields}); 
  }
    

    register(){
        
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
            NotificationManager.error('Account Creation Error');
            console.log("Mello",error);
          });
        
       //this.props.history.push('/success');
        
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
                      <legend><h1>Register</h1></legend>
                            <div className="form-group">
                                    
                                    <label htmlFor="inputName" className="col-lg-2 control-label">Name</label>
                                    <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputName" placeholder="Name" ref="inputName" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                    
                                    
                                    </div>

                                    
                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                    <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="inputEmail" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                    </div>
                                    

                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Phone Number</label>
                                    <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="inputPhone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                    </div>
                                    

                                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                                    <div className="col-lg-10">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref="inputPassword" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                                    </div>
                                    

                                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password Confirm</label>
                                    <div className="col-lg-10">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password confirm" ref="inputPasswordConfirm" onChange={this.handleChange.bind(this, "passwordconfirm")} value={this.state.fields["passwordconfirm"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["passwordconfirm"]}</span>
                                    </div>
                                    

                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10 form-check">
                                    <div onChange={this.setRole.bind(this)}>
                                    <input type="radio" value="User" name="gender" checked="checked"/> User<br/>
                                    <input type="radio" value="EventOrganizer" name="gender"/> Event Organizer<br/>
                                    <input type="radio" value="CarParkOwner" name="gender"/> Car Park Owner<br/>
                                    <input type="radio" value="ShopOwner" name="gender"/> Shop Owner<br/>
                                    </div>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10">

                                    <button type="submit" className="btn btn-default" onClick={this.contactSubmit.bind(this)}>Register</button>
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