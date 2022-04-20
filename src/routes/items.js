const express = require('express')
const router = express.Router()
const Item = require('../models/item')

module.exports = router

//GET /items
router.get('/', async (req, res) => {
    const items = await Item.find()
    res.json(items)
})

//GET /items/:item_id
router.get('/:item_id', getItem, (req, res) => {
    res.send(res.item)
})

//POST /items
router.post('/', async (req, res) => {
    const item = new Item({
        Name: req.body.Name,
        Quantity: req.body.Quantity,
        Price: req.body.Price,
        StoreID: req.body.StoreID
    })
    const newItem = await item.save()
    res.json(newItem)
})

async function getItem(req, res, next) {
    let item
    item = await Item.findById(req.params.id)
    res.item = item
    next()
}