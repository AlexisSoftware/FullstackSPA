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

//PUT /items/:item_id
router.put('/:item_id', getItem, async (req, res) => {
    res.item.Name = req.body.Name
    res.item.Quantity = req.body.Quantity
    res.item.Price = req.body.Price
    res.item.StoreID = req.body.StoreID
    const updatedItem = await res.item.save()
    res.json(updatedItem)
})

//DELETE /items/:item_id
router.delete('/:item_id', getItem, (req, res) => {
    res.item.remove()
})

//PATCH /items/:item_id
router.patch('/:item_id', getItem, async (req, res) => {
    if (req.body.Name != null) {
        res.item.Name = req.body.Name
    }
    if (req.body.Quantity != null) {
        res.item.Quantity = req.body.Quantity
    }
    if (req.body.Price != null) {
        res.item.Price = req.body.Price
    }
    if (req.body.StoreID != null) {
        res.item.StoreID = req.body.StoreID
    }
    const updatedItem = await res.item.save()
    res.json(updatedItem)
})

async function getItem(req, res, next) {
    let item
    item = await Item.findById(req.params.id)
    res.item = item
    next()
}