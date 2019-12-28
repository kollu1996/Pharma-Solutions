import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from "./Navigation";
import LoginPage from "./LoginPage";
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

class LoginComponent extends React.Component {
    /*componentDidMount() {
        console.log("I am checking if session is set");
        const response = Axios.get('/app');
        console.log(response.status);
        if (response.status === 200) {
            this.props.history.push('/src/Retailehome')
        }
        if(response.status === 403){
            console.log("session id and user id are not same");
        }
    }*/

    render() {
        return (
            <div>
                <Navigation/>
                <div id="main">
                    <div id="RLogin">
                        <LoginPage formname={"Retailer"} />
                    </div>
                    <div id="MLogin">
                        <LoginPage formname={"Manufacturer"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginComponent);