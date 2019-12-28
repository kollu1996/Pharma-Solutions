import React from 'react'
import ManuNavigation from "./ManuNavigation";
import Axios from 'axios';
import OrdersCard from "./OrdersCard";
class Notifications extends React.Component{
    async componentDidMount(){
        try {
            const orders = Axios.get('/app/orders');
            console.log(orders);
            if (orders.status === 200) {
                console.log("Successfully fetched the orders from database");
            }
        } catch (error) {
            console.log("Erros in fetching orders: " + error.message);
        }
    }
    render(){
        return(
            <div>
                <ManuNavigation/>
                <h1>
                I am a notifications page
                </h1>
                <OrdersCard/>
                </div>
        )
    }
}

export default Notifications