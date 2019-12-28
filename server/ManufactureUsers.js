const mongoose = require('mongoose');
const ManufactureSchema = new mongoose.Schema({
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

const Manufacturecollection = mongoose.model('Manufacturecollection',  ManufactureSchema);
module.exports = Manufacturecollection;