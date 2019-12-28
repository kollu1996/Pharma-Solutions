import React from 'react'
import ManuNavigation from "./ManuNavigation";
class Manufacturerhome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ManuNavigation/>
               <h1> I am in Manufacturer Home</h1>
                </div>
        )
    }
}

export default  Manufacturerhome;