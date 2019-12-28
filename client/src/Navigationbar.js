import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {withRouter} from 'react-router-dom';
class Navigationbar extends React.Component{


    render(){
        const {retailerid} = this.props;
        return(
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            PharmaSolutions
                        </Typography>
                        <Button color="inherit" onClick={()=>{this.props.history.push('/addmedicine')}}>
                            Add Medicine
                        </Button>
                        <Button color="inherit" onClick={()=>{this.props.history.push('/displaymedicine' )}}>
                            Display Medicine
                        </Button>
                        <Button color="inherit" onClick={()=>{this.props.history.push('/notify')}}>
                            Notify
                        </Button>
                        <Button color="inherit" onClick={()=>{this.props.history.push('/delete')}}>
                            Delete Medicine
                        </Button>

                        <Button color="inherit" onClick={()=>{
                            try {
                               const respone =  Axios.post('/logout');
                               console.log(respone);
                                if(respone){
                                    this.props.history.push('/');
                                }
                                else if(respone.status === 400){
                                    console.log("I could not logout");
                                }
                            }
                            catch(error){
                                console.log("Error in logging out")
                            }
                        }}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(Navigationbar);