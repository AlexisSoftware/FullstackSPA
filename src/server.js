const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/storeinventory', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const storesRouter = require('./routes/stores')
app.use('/stores', storesRouter)

const itemsRouter = require('./routes/items')
app.use('/items', itemsRouter)

app.listen(3000, () => console.log('Server Started'))