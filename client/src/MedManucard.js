import React from 'react'
import Axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

class MedManucard extends React.Component{
        render() {
            const {medname, medid} = this.props;
            return (
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {medname}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {medid}
                        </Typography>
                    </CardContent>
                </Card>

            )
        }
}

export default MedManucard;