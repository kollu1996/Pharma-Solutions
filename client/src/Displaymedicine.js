import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Addmedicine.css';
import Button from "@material-ui/core/Button";
import Axios from 'axios';
import Medcard from "./Medcard";
import Navigationbar from "./Navigationbar";

class Displaymedicine extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            allmedicines: []
        };
        this.loadmedicines = this.loadmedicines.bind(this);
    }

     async componentDidMount() {
        await this.loadmedicines();
     }
     async loadmedicines(){
         try {
             const response = await Axios.get('/app/allmed');
             const {data} = response;
             this.setState({allmedicines : data });
         }
         catch(error){
             console.log(error.message);
         }
     }

    render(){
        const {allmedicines} = this.state;
        const medicinecomponent = allmedicines.map((med) =>
            <Medcard medname = {med.medicinename} count = {med.count} medid = {med.medicineid} toggleparent = {this.loadmedicines} />);
         return(
             <div>
                 <Navigationbar />
           <h1>I am a Display Medicines Page </h1>
                 {medicinecomponent}
                 </div>
         );
     }
}

export default Displaymedicine

