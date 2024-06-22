const mongoose = require('mongoose');
const Schema = mongoose.Schema

const QuerySchema = new Schema({
    title: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },
    phone: {
        type: "String",
        required: true
    },
    name: {
        type: "String",
        required: true
    },
    status: {
        type: "String",
        enum: ["seen","unseen"],
        default: "unseen"
    },
}, { timestamps: true });

module.exports = mongoose.model('Query',QuerySchema);