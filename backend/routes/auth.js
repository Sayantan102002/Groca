const express = require('express');
const User = require('../models/User');
const router = express.Router();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
// var fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Sayantanisagoodb$oy';


router.post('/createuser', [
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('cpassword', 'Password and confirm password must match').custom((value, { req }) => {
        if (value !== req.body.password)
            throw new Error('Password and confirm password must match');
        return true;
    }),
    body('email', 'Enter a valid Email').isEmail(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ errors: "User Already Exist" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }

        }
        res.json(data);
        //   const authToken = jwt.sign(data, JWT_SECRET);
        //   res.json({ authToken });
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "You are not registered" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })
        }
        // const data = {
        //     user: {
        //         id: user.id
        //     }
        // }
        //   const authToken = jwt.sign(data, JWT_SECRET);
        res.send("You are successfully logged in");
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})
module.exports = router;