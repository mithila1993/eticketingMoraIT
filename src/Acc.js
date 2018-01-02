import React, { Component } from 'react';
import * as firebase from 'firebase';
import Accmenu from './Accmenu';
import Login from './Entersite/Login'



class Acc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggin:0
        }
        this.changeLog = this.changeLog.bind(this);
        
    }

    componentWillMount() {
        if(firebase.auth().currentUser){
        this.setState({
            isloggin : 1
        });
        // console.log('user check');
    }   
    }

    changeLog(number){
        this.setState({
            isloggin: number
        });
    }



    

    render() {
        
        // var acc = firebase.auth().currentUser ? <Adminmain/> :  <Login/>;
        
        // var use;
        var acc = this.state.isloggin ? <Accmenu changeLog={this.changeLog} /> : <Login changeLog={this.changeLog}/>;
        
        return (
            <div>
                {acc}
            </div>
        );
    }
}

export default Acc;