const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const { validationResult } = require("express-validator");
const User = require("../../models/User");
//@desc test user route
//@route GET api/users

router.get("/", (req, res) => {
  res.send("Users Route");
});


//@desc Register User
//@routes POST api/users
router.post(
  "/",
  usersController.validate("createUser"),
  usersController.createUser
  // [
  //   check("name", "Name is required")
  //     .not()
  //     .isEmpty(),
  //   check("email", "Please include valid email").isEmail(),
  //   check(
  //     "password",
  //     "Please enter password with at least 6 characters long"
  //   ).isLength({ min: 6 })
  // ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }
//     const { name, email, password } = req.body;
//     // Check if user exist
//     User.findOne({ email: req.body.email });
//     // Get users gravatar

//     // Bcrypt
//     // jsonwebtoken
//     console.log(`req.body: `, req.body);

//     res.send("User Route");
//   }
);

module.exports = router;
