const Mongoose = require('mongoose');
const OrdersSchema = new Mongoose.Schema({
    medicinename : {
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    },
    medicineid:{
        type: String,
        required: true,
        unique: true
    }
});

const OrdersCollection = Mongoose.model('OrdersCollection', OrdersSchema);
module.exports = OrdersCollection;
