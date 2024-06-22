const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: "String",
        required: true,
        unique:true
    },
    phone: {
        type: "String",
        required: true,
        unique:true
    },
    email: {
        unique:true,
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true
    },
    userType: {
        type: "String",
        enum: ["admin","client"],
        default: "client"
    },
    role: {
        type: "String",
        enum: ["admin","superadmin","default"],
        default: "default"
    },
}, { timestamps: true });

module.exports = mongoose.model('User',UserSchema);