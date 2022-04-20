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