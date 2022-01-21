const express = require('express');
const router = express.Router();
const Products = require('../models/products');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


router.post('/enterproducts', [
    body('image', 'Enter image URL'),
    body('title', 'Enter Title'),
    body('weights', 'Enter Weight'),
    body('price', 'Enter Price'),
    body('sale', "Enter true of false"),
    body('saleDiscount'),
], async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).send({ error: error.array() });
    }
    try {
        let ProductalreadyExist = await Products.findOne({ title: req.body.title });
        if (ProductalreadyExist) {
            return res.status(400).send({ error: "Product Already Exist" });
        }
        let Product = await Products.create({
            image: req.body.image,
            title: req.body.title,
            weights: req.body.weights,
            price: req.body.price,
            sale: req.body.sale,
            saleDiscount: req.body.saleDiscount,
        });
        res.json(Product);
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
})





router.get('/getproducts', async (req, res) => {
    try {
        let Product = await Products.find();
        res.json(Product);
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
})

router.get('/getproduct/:id', async (req, res) => {
    try {
        let Product = await Products.findById(req.params.id).select("-weights");
        // let Product2 = await Product.select(-"sale");
        // let Product3 = await Product2.select(-"saleDiscount");
        res.json(Product);
        
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;