const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
//going to try 
module.exports = {
    validate: method => {
    switch (method) {
      case 'createUser': {
        return [
          check('name', 'Name is required')
            .not()
            .isEmpty(),
          check('email', 'Please include valid email').isEmail(),
          check(
            'password',
            'Please enter password with at least 6 characters long'
          ).isLength({ min: 6 })
        ]
      }
    }
  },
  createUser: async (req, res, next) => {
          const errors = validationResult(req)
          if(!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() })
          }
          const { name, email, password } = req.body

          try {
              // find a user
              let user = await User.findOne({ email })

              if(user){
                 return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
              }
              // generate avatar with user's email
              const avatar = gravatar.url(email, {
                  s: '200',
                  r: 'pg',
                  d: 'retro'
              })

              user = new User({
                  name, email, password, avatar
              })
              // Set rounds
              const salt = await bcrypt.genSalt(10)
              // Hash password 
              user.password = await bcrypt.hash(password, salt)
              await user.save() 

              // jsonwebtoken

              res.send('Successfully Registered')
          } catch (err) {
              console.log(`: `, err.message);
                
              res.status(500).send('Server Error')
          }
      
  }
}