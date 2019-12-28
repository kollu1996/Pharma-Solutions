import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Navigation.css'


class Navigation extends React.Component{
    render(){
        return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6"  id="Companyname" >
                       Pharma Solutions
                    </Typography>
                    <div  id="about">

                        <Button color="inherit"  >
                            <Typography >
                           About
                            </Typography>
                        </Button>

                        </div>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}

export default Navigation;