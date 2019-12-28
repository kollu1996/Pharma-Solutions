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
import './App.css'
import Copyright from './Copyright';
import './LoginPage.css'
import {withRouter} from 'react-router-dom';
import SignUp from "./SignUp";
import Axios from 'axios'
import Retailermedicine from "./Addmedicine";

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            retailerid: '',
            retailerpassword: '',
            manuid: '',
            manupassword: '',
            validated: false,
            validated1: false,
            loggedIn: false
        };
        this. onretaileridchange = this. onretaileridchange.bind(this);
        this.onretailerpasswordchange = this.onretailerpasswordchange.bind(this);
        this.onmanuidchange = this.onmanuidchange.bind(this);
        this.onmanupasswordchange = this.onmanupasswordchange.bind(this);
        this.retailerhandleclick = this.retailerhandleclick.bind(this);
        this.manuhandleclick = this.manuhandleclick.bind(this);
        this.checkAuthStatus = this.checkAuthStatus.bind(this);
    }

    onretaileridchange(event){
        this.setState({retailerid: event.target.value})
    }

    onretailerpasswordchange(event){
        this.setState({retailerpassword: event.target.value})
    }

    onmanuidchange(event){
        this.setState({manuid: event.target.value})
    }

    onmanupasswordchange(event){
        this.setState({manupassword: event.target.value})
    }

    async retailerhandleclick(){
        const {retailerid, retailerpassword} = this.state;
        console.log("The fucking retailer id is: "+ retailerid);
        console.log("The fucking retailer password is: "+ retailerpassword);
        console.log("I was fucking clicked");
        const loginobject = {
            id: retailerid,
            password: retailerpassword
        };
        try {
            const response = await Axios.post('/app/retailer/login', loginobject);
            if(response.status === 200){
               this.setState({validated: true})
            }
        }
        catch(error){
            console.log("Error in validating:"+ error.message);
        }
    }

    checkAuthStatus(){
        console.log(this.state.loggedIn);
        return this.state.loggedIn;
    }


    async manuhandleclick(){
        const {manuid, manupassword} = this.state;
        console.log("The fucking manufacturer id is: "+ manuid);
        console.log("The fucking manufacturer password is: "+ manupassword);
        console.log("I was fucking clicked");
        const loginobject = {
            id: manuid,
            password: manupassword
        };
        try {
            const response = await Axios.post('/app/man/login', loginobject);
            if(response.status === 200){
                this.setState({validated1: true})
            }
        }
        catch(error){
            console.log("Error in validating:"+ error.message);
        }
    }

    render(){
        const {formname} = this.props;
        const {retailerid, retailerpassword, manuid, manupassword, validated, validated1} = this.state;
        if(validated) {
            this.props.history.push('/src/Retailehome', {retailerid: retailerid})
        }
        if(validated1){
            this.props.history.push('/src/Manufacturehome', {manuid: manuid})
        }
        if(formname === 'Retailer') {
            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div>
                        <Typography component="h1" variant="h5" id="Signintext">
                            {formname} Sign in
                        </Typography>
                        <form>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="id"
                                label="id"
                                name="id"
                                value={retailerid}
                                autoComplete="id"
                                autoFocus
                                onChange={this.onretaileridchange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                value={retailerpassword}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.onretailerpasswordchange}
                            />
                            <Grid container id="Grid">
                                <Grid item>
                                    <Link onClick={() => this.props.history.push('/src/SignUp', {f: formname})}
                                          variant="body2" activeClassName="active">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        <Button
                            onClick={this.retailerhandleclick}
                        >
                            Sign In
                        </Button>
                    </div>
                    <Box mt={8}>
                        <Copyright/>
                    </Box>
                </Container>

            );
        }

        if(formname === 'Manufacturer'){

            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div>
                        <Typography component="h1" variant="h5" id="Signintext">
                            {formname} Sign in
                        </Typography>
                        <form>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="id"
                                label="id"
                                name="id"
                                value={manuid}
                                autoComplete="id"
                                autoFocus
                                onChange={this.onmanuidchange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                value={manupassword}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.onmanupasswordchange}
                            />
                            <Grid container id="Grid">
                                <Grid item>
                                    <Link onClick={() => this.props.history.push('/src/SignUp', {f: formname})}
                                          variant="body2" activeClassName="active">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        <Button
                            onClick={this.manuhandleclick}
                        >
                            Sign In
                        </Button>
                    </div>
                    <Box mt={8}>
                        <Copyright/>
                    </Box>
                </Container>

            );
        }
    }
}

export default withRouter(LoginPage)