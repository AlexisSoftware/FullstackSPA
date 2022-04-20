const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    StoreID: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('item', itemSchema)