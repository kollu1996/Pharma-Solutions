import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Axios from 'axios'
import {withRouter} from 'react-router-dom';
import Displaymedicine from "./Displaymedicine";

class Medcard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:''
        };
        this.addcount =  this.addcount.bind(this);
        this.subcount  = this.subcount.bind(this);
    }
    async addcount(){
        const {medid, loadmedicines} = this.props;
        console.log("The medid is:"+ medid);
        try{
           const response = await Axios.put('/app/count/'+medid);
            this.props.toggleparent();
           if(response.status === 200){
               console.log("Updated count successfully")
           }
        }
        catch(error){
            console.log("Error is at client side :"+ error.message);
        }
    }

    async subcount(){
        const {medid, loadmedicines} = this.props;
        console.log("The medid is: "+ medid);
        try{
            const response = await Axios.put('/app/count1/'+medid);
            this.props.toggleparent();
            if(response.status === 200){
                console.log("Updated count successfully")
            }
        }
        catch(error) {
            console.log("Error is: " + error.message);
        }

    }

    render() {
        const {medname, count, medid} = this.props;
        return (
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {medname}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {medid}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {count}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick = {this.addcount}>
                        Add Count
                    </Button>
                    <Button size="small" color="primary" onClick = {this.subcount}>
                        Delete count
                    </Button>
                </CardActions>
            </Card>

        )
    }
}
export default withRouter(Medcard)