const Mongoose = require('mongoose');
const ManuMedicineSchema = new Mongoose.Schema({
    medicinename : {
        type: String,
        required: true
    },
    medicineid:{
        type: String,
        required: true,
        unique: true
    }
});

const ManuMedicinecollection = Mongoose.model('ManuMedicinecollection', ManuMedicineSchema);
module.exports = ManuMedicinecollection;