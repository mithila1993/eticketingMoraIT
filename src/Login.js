import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Account from './Account';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      message : "Hello"
    }
    this.getkey = this.getkey.bind(this);
    
    
  }

  getkey(e){
    e.preventDefault(); 
    const emailRegistered = this.refs.inputEmail.value;
    const passRegistered = this.refs.inputPassword.value;

    console.log('button clicked');

    firebase.auth().signInWithEmailAndPassword(emailRegistered, passRegistered).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);

      // ...
    });

    
    setTimeout(function(){
      window.location = ''
    },120000)
  

   this.setState({
      showComponent: true,
    });
    
}

//google sign in
googlesignin(e){
  e.preventDefault();
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

fbsignin(e){
  e.preventDefault();
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

  render() {
    // const User = firebase.auth().onAuthStateChanged(firebaseUser=>
    //   firebaseUser ? console.log(firebaseUser) : console.log('not logged in')+"Hello"

    var user = firebase.auth().currentUser;
    console.log(user);
    

    
   return(
    <div>
    
    {user ? <Account/> :
      <div className="container">
          <form className="form-horizontal">
                <fieldset>
                      <legend><h1>Login</h1></legend>
                            <div className="form-group">
                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                    <div className="col-lg-10">
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref="inputEmail"/>
                                    </div>
                                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                                    <div className="col-lg-10">
                                    <input type="password" className="form-control" id="inputPass" placeholder="Password" ref="inputPassword"/>
                                    </div>
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10">
                                    <button type="submit" className="btn btn-default" onClick={this.getkey}>Login</button>&nbsp;&nbsp;&nbsp;
                                    <img id="myImg" src="https://i.stack.imgur.com/ZW4QC.png" alt="Trolltunga, Norway" onClick={this.googlesignin}/>
                                    <img id="myImg" src="http://www.setyourowntests.com/_/rsrc/1468869481521/help/accounts/btn_google_signin_dark_normal_web%402x.png" height="52px" weight="50px" alt="Trolltunga, Norway" onClick={this.fbsignin} />

                                    </div>
                                    
                                    {this.state.showComponent ?
                                    <h1>Success</h1> :
                                    null
                                    }
                                    

                                    
                            </div>
                </fieldset>
          </form>
</div>    
    
     }

    

    </div>
   )
  }
}

export default Login;