const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('POST Route')
})

module.exports = router