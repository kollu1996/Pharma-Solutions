import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from 'axios';
import Navigationbar from "./Navigationbar";

class Deletemed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            medid: ''
        };
        this.getmedid = this.getmedid.bind(this);
        this.deletemedicine = this.deletemedicine.bind(this);
    }

    getmedid(event){
        this.setState({medid: event.target.value})
    }

    async deletemedicine(){
        const {medid}  = this.state;
        console.log("Med id to delete is: " + medid);
        try {
            const response = await Axios.delete('/medicine/del/'+ medid);
            if (response.status === 200) {
                console.log("Delete Successful")
            }
        }
        catch(error){
            console.log("Error in client side: "+ error.message)
        }
    }

    render(){
        const {medid} = this.state;
        return(
            <div>
                <Navigationbar />
                <h1> I am in delete medicines </h1>
                <form>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="id"
                        name="id"
                        value={medid}
                        autoComplete="id"
                        autoFocus
                        onChange={this.getmedid}
                    />
                    </form>
                <Button onClick={this.deletemedicine} >
                    Delete
                </Button>
            </div>
        )
    }
}

export default Deletemed;