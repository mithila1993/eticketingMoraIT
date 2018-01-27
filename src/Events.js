import React, { Component } from 'react';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import Textarea from 'react-validation/build/textarea';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
      console.log(`${value} is not a valid email.`);
    return `${value} is not a valid email.`
  }
};
 
const lt = (value, props) => {
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};
 
const password = (value, props, components) => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
    // 'confirm' - name of input
    // components['confirm'] - array of same-name components because of checkboxes and radios
    return <span className="error">Passwords are not equal.</span>
  }
};

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
 
        // Emulate async API call
        setTimeout(() => {
            this.form.showError(this.userInput, <span>API error</span>);
        }, 1000);
    };
 
    removeApiError = () => {
        this.form.hideError(this.userInput);
    };

   
    
    
    render() {
        

        return (
            <Form ref={c => { this.form = c }} onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
                <div className="small-12 columns">
                    <h3>Leave a comment</h3>
                </div>
            </div>
            <div className="row">
                <div className="small-12 medium-4 columns">
                    <label>
                        <Input
                          onFocus={this.removeApiError}
                          ref={c => { this.userInput = c }}
                          placeholder="username"
                          type="text"
                          value="Username"
                          name="username"
                          validations={[required]}
                        />
                    </label>
                </div>
                <div className="small-12 medium-8 columns">
                    <label>
                        <Textarea
                          placeholder="Leave your comment..."
                          value="Comment"
                          name="comment"
                          validations={[required]}
                        />
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="small-12 medium-6 columns">
                    <Button className="button">Submit</Button>
                </div>
            </div>
        </Form>
        );
    }
}


export default Events;