const express = require('express')
const router = express.Router()
const Wishlist = require('../controllers/wishlist')

router.get('/', Wishlist.findAll)
router.post('/add', Wishlist.add)
router.delete('/delete/:id', Wishlist.delete)

module.exports = router