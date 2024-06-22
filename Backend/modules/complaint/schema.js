const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    title: {
        type: "String",
        required: true
    },
    img: {
        type: "String",
        required: false,
        default: ''
    },
}, { timestamps: true });

module.exports = mongoose.model('Category',CategorySchema);