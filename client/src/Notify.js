import React from 'react'
import TextField from '@material-ui/core/TextField';
import Navigationbar from "./Navigationbar";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/core/Icon';

import './Notify.css'
import Axios from 'axios'
class Notify extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           medicineid: '',
            medicinename: '',
            count: ''
        };
        this.idchange = this.idchange.bind(this);
        this.namechange = this.namechange.bind(this);
        this.countchange = this.countchange.bind(this);
        this.notifybutton = this.notifybutton.bind(this);
    }
    notifybutton(){
        const {medicineid, medicinename, count} = this.state;
        console.log(medicineid);
        console.log(medicinename);
        console.log(count);
        const notifyobj = {
            medicineid: medicineid,
            medicinename: medicinename,
            count: count
        };
        try {
            const response = Axios.post("/app/notify", notifyobj);
            if (response.status === 200) {
                console.log("Added to orders table");
            }
        }
        catch(error){
            console.log("Error in client side is: "+ error.message);
        }
    }
    idchange(event){
        this.setState({medicineid: event.target.value})
    }
    namechange(event){
        this.setState({medicinename: event.target.value})
    }
    countchange(event){
        this.setState({count: event.target.value})
    }
    render(){
        return(
            <div>
            <Navigationbar/>
          <div id="notifyform">

              <h1> Enter the details you want to notify </h1>
              <TextField
                  label="Medicine Id"
                  autoComplete="current-password"
                  margin="normal"
                  onChange={this.idchange}
              />
              <br/>
              <TextField
                  label="Medicine Name"
                  autoComplete="current-password"
                  margin="normal"
                  onChange={this.namechange}
              />
             <br/>
              <TextField
                  label="Count"
                  autoComplete="current-password"
                  margin="normal"
                  onChange={this.countchange}
              />
              <div>
              <Button id="notifybutton" onClick = {this.notifybutton}> Submit </Button>
              </div>
              </div>
            </div>
        );
    }
}

export default Notify