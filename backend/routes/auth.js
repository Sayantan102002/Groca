const express = require('express');
const User = require('../models/User');
const router = express.Router();
// const mongoose = require('mongoose');
// const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Sayantanisagoodb$oy';


router.post('/createuser', [
  body('firstname', 'Enter a valid name').isLength({ min: 3 }),
  body('lastname', 'Enter a valid name'),
  body('email', 'Enter a valid Email').isEmail(),
  body('phone_number', 'Enter a valid Phone Number'),
  body('date_of_birth', 'Enter a valid Date of Birth'),
  body('gender','Gender is required'),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
  body('cpassword', 'Password and confirm password must match').custom((value, { req }) => {
    if (value !== req.body.password)
      throw new Error('Password and confirm password must match');
    return true;
  }),
], async (req, res) => {
  let success = false;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ success, error: error.array() });
  }
  try {

    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ success, error: "User Already Exist" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      Phone_Number: req.body.phone_number,
      Gender:req.body.gender,
      Date_Of_Birth: req.body.date_of_birth,
      email: req.body.email,
      password: secPass,
    })
    const data = {
      user: {
        id: user.id
      }

    }
    success = true;
    // const name=req.body.firstname;
    // console.log(name);
    // res.json(success = true, data);
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ success, authToken });
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Ocurred");

  }
})


router.post('/login', [
  body('password', 'Password cannot be blank').exists({ min: 5 }),
  body('email', 'Enter a valid Email').isEmail(),
], async (req, res) => {
  let success = false;
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false;
      return res.status(400).json({ success, error: "Please try to login with correct credentials" })
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ success, error: "Please try to login with correct credentials" })
    }
    const data = {
      user: {
        id: user.id
      }
    }
    success = true;
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ success, authToken });
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");

  }

})

router.get('/getuser', fetchuser, async (req, res) => {
  try {

    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.json({user});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");

  }
})


module.exports = router;