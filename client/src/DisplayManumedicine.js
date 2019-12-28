import React from 'react'
import Axios from "axios";
import Medcard from "./Medcard";
import Navigationbar from "./Navigationbar";
import MedManucard from "./MedManucard";
import ManuNavigation from "./ManuNavigation";

class DisplayManumedicine extends React.Component{
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
            const response = await Axios.get('/app/manu/allmed');
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
            <MedManucard medname = {med.medicinename} medid = {med.medicineid} />);
        return(
            <div>
                <ManuNavigation/>
                <h1>I am a Display Medicines Page </h1>
                {medicinecomponent}
            </div>
        );
    }
}

export default DisplayManumedicine;