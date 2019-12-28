import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Addmedicine.css';
import Button from "@material-ui/core/Button";
import Axios from 'axios';
import Navigationbar from "./Navigationbar";

class Addmedicine extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            medicinename: '',
            count: '',
            medicineid: ''
        };
        this.medicinechange = this.medicinechange.bind(this);
        this.countchange = this.countchange.bind(this);
        this.addmedclick = this.addmedclick.bind(this);
        this.medicineidchange = this.medicineidchange.bind(this);
    }
    medicinechange(event){
        this.setState({medicinename: event.target.value})
    }
    countchange(event){
        this.setState({count: event.target.value})
    }
    medicineidchange(event){
        this.setState({medicineid: event.target.value})
    }
    async addmedclick() {
        const {medicinename, count, medicineid} = this.state;
        const medobject = {
            medicinename: medicinename,
            count: count,
            medicineid: medicineid,
        };
        try {
            const response = await Axios.post('/app/med', medobject);
            console.log("Addition Successful");
        } catch (error) {
            console.log("Error in adding medicine" + error.message)
        }
    }
    render(){
        const {medicinename, count, medicineid} = this.state;
        return(
            <div>
                <Navigationbar/>
            <div id="medform">
                <p> Note: Count should be greater than 0 while adding a medicine </p>
                <p> Note: Medicine Id should be unique to it </p>
             <form>
               <TextField
                   id="box1"
                   label="Medname"
                   variant="outlined"
                   value = {medicinename}
                   onChange={this.medicinechange}
               />
               <span>  </span>
               <TextField
                   id="box2"
                   label="Count"
                   variant="outlined"
                   value = {count}
                   onChange={this.countchange}
               />
                 <span>  </span>
                 <TextField
                     id="box3"
                     label="Med id"
                     variant="outlined"
                     value = {medicineid}
                     onChange={this.medicineidchange}
                 />

               </form>
                <div id="addmedbt">
                <Button onClick={this.addmedclick}> Add Medicine</Button>
                </div>
                </div>
                </div>

        );
    }
}

export default Addmedicine