const express = require('express');
const router = express.Router();
// const Products = require('../models/products');
const Address = require('../models/Address');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

router.post("/addAddress", fetchuser, [
    body('name').isLength({ min: 3 }),
    body('phone').isLength(10),
    body('locality', "Enter your Locality").isLength({ min: 3 }),
    body('Address_and_Street', 'Enter a valid address').isLength({ min: 5 }),
    body('City_or_Village'),
    body('State'),
    body('Country'),
    body('pincode').isLength(6),
    body('Alternate_Phone'),
    body('landmark'),
    body('Address_Type'),
], async (req, res) => {
    const { name, phone, pincode, locality, Address_and_Street, City_or_Village, State, Country, landmark, Alternate_Phone, Address_Type } = req.body;
    const { userId } = req.user;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    try {
        const isExist = await Address.findOne({ userId, name, phone, pincode, locality, Address_and_Street, City_or_Village, State, Country, landmark, Alternate_Phone, Address_Type });
        if (isExist) { res.status(400).json({ error: "Address already exist" }); }
        else {
            let newAddress = new Address({
                userId,
                name,
                phone,
                pincode,
                locality,
                Address_and_Street,
                City_or_Village,
                State,
                Country,
                landmark,
                Alternate_Phone,
                Address_Type
            });
            const savedAddress = await newAddress.save();
            res.status(200).json(savedAddress);
        }
    }
    catch (err) {
        // res.status(400).json({ error: err.message });

        /* 
            Above code is commented because it is showing .Cannot set headers after they are sent to the client
        
        */
    }
})


router.get("/getAddress", fetchuser, async (req, res) => {
    const { userId } = req.user;
    try {
        const address = await Address.find({ userId: userId });
        res.status(200).json(address);
    }
    catch (err) {
        res.status(404).json("Internal Server Error");
    }
})



















module.exports = router;