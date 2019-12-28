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
import Container from '@material-ui/core/Container';
import Copyright from "./Copyright";
import './Signup.css';
import SignUpCard from "./SignUpCard";
import Axios from 'axios';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            company_name: '',
            city: '',
            retailer_id: '',
            password: '',
            flag: false,
            f1: '',
            manufacturer_id: ''
        };
        this.handleChangecompany_name = this.handleChangecompany_name.bind(this);
        this.handleChangecity_name = this.handleChangecity_name.bind(this);
        this.handleChangeid = this.handleChangeid.bind(this);
        this.handleChangepassword = this.handleChangepassword.bind(this);
        this.onsignupclick = this.onsignupclick.bind(this);
    }


    handleChangecompany_name(event){
        console.log("I am here");
        console.log("The handler is: "+event.target.value);
        console.log("I am here");
        this.setState({company_name: event.target.value})
    }

    async onsignupclick(){
        console.log("I am clicked and I am successfully raised state");
        const {f} = this.props.location.state;
        const {company_name,city,retailer_id,password, manufacturer_id, flag} = this.state;
        console.log(company_name);
        console.log(city);
        console.log(retailer_id);
        console.log(password);
        console.log(f);
        if(f === 'Retailer') {
            console.log("I am in retailer code");
            const registerdata = {
                company_name: company_name,
                city_name: city,
                id: retailer_id,
                password: password
            };
            try {
                console.log("I am communicating with server");
                const response = await Axios.post('/app/register', registerdata);
                console.log(response);
            }
            catch(error) {
                console.log("Error is.,,,,,,,,,,,,,,: " + error.message);
            }

        }

        if(f === 'Manufacturer'){
            const registerdata = {
                'company_name': company_name,
                'city_name': city,
                'id': manufacturer_id,
                'password': password
            };
            try {
                const response = Axios.post('/pharma/manufacturer/signup', registerdata);
                console.log(response);
            }
            catch(error){
                console.log("Error message: "+ error.message);
            }
        }
    }

    handleChangecity_name(event){
        console.log("I am here");
        console.log("The handler is: "+event.target.value);
        console.log("I am here");
        this.setState({city: event.target.value})
    }

    handleChangeid(event){
        const {f} = this.props.location.state;
        console.log("I am here");
        console.log("The handler is: "+event.target.value);
        console.log("I am here");
        if(f === "Retailer") {
            this.setState({retailer_id: event.target.value})
        }
        else{
            this.setState({manufacturer_id: event.target.value})
        }
    }

    handleChangepassword(event){
        console.log("I am here");
        console.log("The handler is: "+event.target.value);
        console.log("I am here");
        this.setState({password: event.target.value})
    }

    render(){
        const {company_name,city,retailer_id,password, manufacturer_id, flag} = this.state;
        const {f} = this.props.location.state;
        if(f === "Retailer") {
            return (
                <div>
                <SignUpCard f={f} cname={company_name}
                            city={city}
                            id={retailer_id}
                            passwd={password}
                            onChange = {this.handleChangecompany_name}
                            onChangecname = {this.handleChangecity_name}
                            onChangeid = {this.handleChangeid}
                            onChangepassword = {this.handleChangepassword}


                />
                                <div id="signup">
                                <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.onsignupclick}
                                >
                                Sign Up
                            </Button>
                        </div>
                        <Grid container justify="flex-end" id="signin">
                        <Grid item>
                        <Link onClick={() => this.props.history.push('/')} variant="body2" >
                        Already have an account? Sign in
                        </Link>
                        </Grid>
                        </Grid>
                </div>
            );
        }
        else if(f === "Manufacturer"){
            return(
                <div>
                <SignUpCard f={f} cname={company_name}
                            city={city}
                            id={manufacturer_id}
                            passwd={password}
                            onChange = {this.handleChangecompany_name}
                            onChangecname = {this.handleChangecity_name}
                            onChangeid = {this.handleChangeid}
                            onChangepassword = {this.handleChangepassword}

                />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.onsignupclick}
                        >
                            Sign Up
                        </Button>

                    <Grid container justify="flex-end" id="signin">
                        <Grid item>
                            <Link onClick={() => this.props.history.push('/')} variant="body2" >
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>


                </div>
            )
        }
        else{
            return(
                <h1> No element to render </h1>
            )
        }

}
}

export default SignUp;
