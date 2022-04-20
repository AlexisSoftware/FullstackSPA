const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('store', storeSchema)