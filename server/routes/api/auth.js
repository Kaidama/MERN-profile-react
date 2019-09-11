const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')

const User = require('../../models/User')
// @route GET api/auth
// @desc test
// @access Public

//attach this get to your signin button

router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch(err) {
        console.log(`line 17 api/auth error: `, err.message)
        res.status(500).send('Server Error')
        
    }
    
    // res.send('AUTH Route')
    // console.log(`line 11 test api/auth: `, );
})

module.exports = router