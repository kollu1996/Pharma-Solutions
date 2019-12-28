import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {withRouter} from 'react-router-dom';
class ManuNavigation extends React.Component{
    render(){
        return(
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            PharmaSolutions
                        </Typography>
                        <Button color="inherit" onClick={()=>{this.props.history.push('/AddManumedicine')}}>
                            Add Medicine
                        </Button>
                        <Button color="inherit" onClick={()=>{this.props.history.push('/Displaymanumedicine')}}>
                            Display Medicine
                        </Button>
                        <Button color="inherit" onClick={()=>{this.props.history.push('/Notifications')}}>
                            Notifications
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default withRouter(ManuNavigation)