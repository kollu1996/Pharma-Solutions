import React from 'react'
import TextField from "@material-ui/core/TextField";
import Axios from 'axios'
import Button from "@material-ui/core/Button";
import ManuNavigation from "./ManuNavigation";

class AddManumedicine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            medicineid: '',
            medicinename: ''
        };
        this.idchange = this.idchange.bind(this);
        this.namechange = this.namechange.bind(this);
        this.Addmanumedicine = this.Addmanumedicine.bind(this)
    }
    idchange(event){
        this.setState({medicineid: event.target.value})
    }
    namechange(event){
        this.setState({medicinename: event.target.value})
    }
    Addmanumedicine(){
        const {medicineid, medicinename} = this.state;
        const medobject = {
            medicineid: medicineid,
            medicinename: medicinename
        };
        try {
            const response = Axios.post('/app/manu/addmed', medobject);
            if(response.status === 200){
                console.log("Manu medicine added successfully");
            }
        }
        catch(err){
            console.log("Error in manufacturer is: "+ err.message);
        }
    }

    render(){
        return(
            <div>
                <ManuNavigation/>
            <TextField
                label="Medicine Id"
                autoComplete="current-password"
                onChange={this.idchange}
            />
                <TextField
                    label="Med Name"
                    autoComplete="current-password"
                    onChange={this.namechange}
                />
                <Button onClick={this.Addmanumedicine}> Submit </Button>
            </div>
        )
    }
}

export default AddManumedicine;