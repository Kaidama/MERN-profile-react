const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//@desc test user route
//@route GET api/users
router.get("/", (req, res) => {
  res.send("Users Route");
});
//@desc Register User
//@routes POST api/users
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include valid email").isEmail(),
    check(
      "password",
      "Please enter password with at least 6 characters long"
    ).isLength({ min: 6 })
  ],
   (req, res) => {
    const errors = validationResult(req)   
    if(!errors.isEmpty()){
      return res.status(422).json({ errors: errors.array() })
    }
    console.log(`req.body: `, req.body);

    res.send("User Route");
  }
);

module.exports = router;
