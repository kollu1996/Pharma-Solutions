const mongoose = require('mongoose');
const RetailersSchema = new mongoose.Schema({
    company_name: {
        type: String
    },
    city_name:{
        type: String
    },
    id:{
        type: String
    },
    password:{
        type: String
    }
});

const Retailercollection = mongoose.model('Retailercollection', RetailersSchema);
module.exports = Retailercollection;