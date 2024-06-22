const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    title: {
        type: "String",
        required: true
    },
    balance: {
        type: "Number",
        required: false,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Account',AccountSchema);