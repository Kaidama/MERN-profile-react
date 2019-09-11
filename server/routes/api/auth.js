const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

// @route GET api/auth
// @desc test
// @access Public

router.get('/', auth, (req, res) => {
    res.send('AUTH Route')
    console.log(`line 11 test api/auth: `, );
    
})

module.exports = router