const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function(req, res, next) {
    //get token from header

    const token = req.header('x-auth-token')

    // check if no token
    if(!token) {
        return res.status(401).json({ msg: 'Token not found, authorization denied' })
    }
    // verify
    try {
        const decoded = jwt.verify(token, process.env.jwtSecret)
        req.user = decoded.user
        next()
    } catch(err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }   

}