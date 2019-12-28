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
import Notifications from "./Notifications";
import Deletemed from "./Deletemed";

import Navigation from "./Navigation";
import './App.css'
import LoginPage from './LoginPage'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import SignUp from "./SignUp";
import Addmedicine from "./Addmedicine";
import Displaymedicine from "./Displaymedicine";
import Retailhome from "./Retailhome";
import Notify from './Notify';
import AddManumedicine from "./AddManumedicine";
import Manufacturerhome from "./Manufacturerhome";
import DisplayManumedicine from "./DisplayManumedicine";

class App extends React.Component {
    render(){
        return(
            <div>
        <Router>
            <switch>
                <Route exact path = "/"  component = {LoginComponent} />
                <Route exact path = "/src/SignUp"  component = {SignUp} />
                <Route exact path = "/src/Retailehome" component = {Retailhome} />
                <Route exact path = "/src/Manufacturehome" component = {Manufacturerhome} />
                <Route exact path = "/addmedicine" component = {Addmedicine}/>
                <Route exact path = "/displaymedicine"  component = {Displaymedicine}/>
                <Route exact path = "/notify"  component = {Notify}/>
                <Route exact path = "/AddManumedicine" component = {AddManumedicine}/>
                <Route exact path = "/Displaymanumedicine" component = {DisplayManumedicine}/>
                <Route exact path = "/Notifications" component = {Notifications}/>
                <Route exact path = "/delete" component = {Deletemed} />
            </switch>
        </Router>
        </div>
        );
    }
}

export default App