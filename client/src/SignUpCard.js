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
import {withRouter} from 'react-router-dom';


class SignUpCard extends React.Component{

    render(){
        const {f, cname, city, id, passwd, onChange, onChangecname, onChangeid,  onChangepassword} = this.props;
        const k = f + " " + "Company";
        const l = f + " " +  "id";
        console.log(k);
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div id="fullpage">
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form id="form">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name= {k}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id={k}
                                    label={k}
                                    value = {cname}
                                    onChange = {onChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="City"
                                    label="City"
                                    name="City"
                                    value = {city}
                                    onChange = {onChangecname}
                                    autoComplete="City"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="id"
                                    label= {l}
                                    name= {l}
                                    value = {id}
                                    onChange = {onChangeid}
                                    autoComplete="id"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value = {passwd}
                                    onChange={onChangepassword}
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>

                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

export default withRouter(SignUpCard);