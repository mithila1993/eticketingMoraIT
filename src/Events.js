import React, { Component } from 'react';
import validator from 'validator';
import passwordValidator from 'password-validator';

var schema = new passwordValidator();

class Events extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {
                email:'',
                name:'',
                phone:'',
                password:'',
                passwordconfirm:''
            },
            errors: {}
        }
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
           alert("Form submitted");
        }else{
           alert("Form has errors.")
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value.toString();    
        this.setState({fields}); 
    }


    render() {
        
        return (
            <div>           
            <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                 <div className="col-md-6">
                   <fieldset>
                        <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/><br/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                       <br/>
                      <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                      <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                      <br/>
                      <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                      <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                      <br/>
                      <input refs="phone" type="text" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                      <span style={{color: "red"}}>{this.state.errors["password"]}</span>
                      <br/>
                      <input refs="phone" type="text" size="30" placeholder="Passwordconfirm" onChange={this.handleChange.bind(this, "passwordconfirm")} value={this.state.fields["passwordconfirm"]}/>
                      <span style={{color: "red"}}>{this.state.errors["passwordconfirm"]}</span>
                      <br/>
                      <button type="submit">Hello</button>
                  </fieldset>
               </div>

           </form>
         </div>
        );
    }
}


export default Events;