const express = require('express')
const router = express.Router()
//@desc test user route
//@route GET api/users
router.get('/', (req, res) => {
    res.send('Users Route')
})
//@desc Register User
//@routes POST api/users
router.post('/', (req, res) => {
    console.log(`req.body: `, req.body);
    
    res.send('User Route')
})

module.exports = router