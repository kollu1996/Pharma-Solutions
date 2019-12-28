import React from 'react';
import LoginPage from "./LoginPage";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

class LoginParent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: '',
            password: ''
        };

        this.onidchange = this.onidchange.bind(this);
        this.onpasswordchange = this.onpasswordchange.bind(this);
        this.onbuttonclick = this.onbuttonclick(this);
    }


    onidchange(event){
        this.setState({id: event.target.value})
    }

    onpasswordchange(event){
        this.setState({password: event.target.value})
    }

    onbuttonclick(){
        console.log("I have successfully raised state");
        alert("Logged in button clicked");
    }

    render(){
        const {id, password} = this.state;
        console.log("id is "+ id);
        console.log("password is: "+ password);
        return(
        <LoginPage id = {id} password = {password} onidchange ={this.onidchange} onpasswordchange = {this.onpasswordchange}  />
        );
    }
}

export default LoginParent;