const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
    title:{
        type:"String",
    },
    amount: {
        type:"Number",
        default: 0,
    },
    account:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Account'
    }, 
    transactionDate:{
        type: 'Date',
        default: new Date()
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Category'
    },
    type:{
        type:'String',
        enum: ["income","expense"],
        default:'expense'
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Transaction',TransactionSchema);