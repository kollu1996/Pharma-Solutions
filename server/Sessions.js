const mongoose = require('mongoose');
const SessionsSchema = new mongoose.Schema({
    id:{
        type: String
    },
    sessionid:{
        type: String
    }
});

const SessionCollection = mongoose.model('SessionCollection', SessionsSchema);
module.exports = SessionCollection;