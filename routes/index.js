const express = require('express')
const router = express.Router()
const wishlist = require('./wishlist')
router.use('/', wishlist)

module.exports = router