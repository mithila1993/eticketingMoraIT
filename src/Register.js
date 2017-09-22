import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            showComponent: false,
        };
        this.getkey = this.getkey.bind(this);
    
    }

    getkey(e){
        e.preventDefault(); 
        const nameRegistered = this.refs.inputName.value;
        const emailRegistered = this.refs.inputEmail.value;
        const passRegistered = this.refs.inputPassword.value;
    
        console.log('button clicked');

        axios.post('http://localhost:3001/getEvents', {
            name: nameRegistered,
            email: emailRegistered,
            pass :passRegistered

          })
          .then(function (response) {
            
            console.log(response);
          })
          .catch(function (error) {
            console.log("Mello",error);
          });
        
       //this.props.history.push('/success');
       this.setState({
          showComponent: true,
        });
        
    }

  render() {
    return (
        <div className="container">
          <form className="form-horizontal">
                <fieldset>
                      <legend><h1>Register</h1></legend>
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
                                    <input type="password" className="form-control" id="inputEmail" placeholder="Password" ref="inputPassword"/>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10">
                                    <button type="submit" className="btn btn-default" onClick={this.getkey}>Register</button>
                                    </div>
                                    {this.state.showComponent ?
                                    <h1>Success</h1> :
                                    null
                                    }
                                    

                                    
                            </div>
                </fieldset>
          </form>
</div>    
    );
  }
}

export default Register;