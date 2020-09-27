const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
});

module.exports = Request = mongoose.model('request', RequestSchema);