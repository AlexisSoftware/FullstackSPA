const express = require('express')
const router = express.Router()
const Store = require('../models/store')
const Item = require('../models/item')

module.exports = router

//GET /stores
router.get('/', async (req, res) => {
    const stores = await Store.find()
    res.json(stores)
})

//GET /stores/:store_id
router.get('/:store_id', getStore, (req, res) => {
    res.send(res.store)
})

//POST /stores
router.post('/', async (req, res) => {
    const store = new Store({
        Name: req.body.Name,
        Location: req.body.Location
    })
    const newStore = await store.save()
    res.json(newStore)
})

//PUT /stores/:store_id
router.put('/:store_id', getStore, async (req, res) => {
    res.store.Name = req.body.Name
    res.store.Location = req.body.Location
    const updatedStore = await res.store.save()
    res.json(updatedStore)
})

//DELETE /stores/:store_id
router.delete('/:store_id', getStore, (req, res) => {
    res.store.remove()
})

//GET /stores/:store_id/items
router.get('/:store_id/items', getStore, getItem, (req, res) => {
    IDofStore = store.id
    items = Item.find({ IDofStore: { $in: item.StoreID } })
    res.json(items)
})

//PATCH /stores/:store_id
router.patch('/:store_id', getStore, async (req, res) => {
    if (req.body.Name != null) {
        res.store.Name = req.body.Name
    }
    if (req.body.Location != null) {
        res.store.Location = req.body.Location
    }
    const updatedStore = await res.store.save()
    res.json(updatedStore)
})

async function getStore(req, res, next) {
    let store
    store = await Store.findById(req.params.id)
    res.store = store
    next()
}

async function getItem(req, res, next) {
    let item
    item = await Item.findById(req.params.id)
    res.item = item
    next()
}