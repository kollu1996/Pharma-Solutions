const Mongoose = require('mongoose');
const MedicineSchema = new Mongoose.Schema({
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
    },
    user:{
        type: String,
        required: true
    }
});

const Medicinecollection = Mongoose.model('Medicinecollection', MedicineSchema);
module.exports = Medicinecollection;