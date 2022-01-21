const express = require('express');
const router = express.Router();
const Products = require('../models/products');
const CartData = require('../models/Cart');
const fetchuser = require('../middleware/fetchuser');

// let cartItemsArr=[];




router.post('/enterinCart/:id', fetchuser, async (req, res) => {
    let cartproduct = await Products.findById(req.params.id);
    // let cartItemsArr2=cartItemsArr.concat(cartproduct);
    const Cartitems = new CartData({
        userId: req.user.id,
        title: cartproduct.title,
        image: cartproduct.image,
        price: cartproduct.price,
        sale: cartproduct.sale,
        saleDiscount: cartproduct.saleDiscount,
        weights: cartproduct.weights,
        Number_Of_items: 1,
    })
    const cartitems = await Cartitems.save();
    res.json(cartitems);
})

router.put('/updateCartItemQuantity/:title/:quantity', fetchuser, async (req, res) => {
    try {
        let cartproduct = await CartData.findOne({title:req.params.title});
        const{title,userId,image,price,sale,saleDiscount,weights,Number_Of_items}=cartproduct;
        const quantity = req.params.quantity;
        const newItem={};
        // {newItem._id=req.params.id}
        if(userId){newItem.userId=userId}
        if(title){newItem.title=title}
        if(image){newItem.image=image}
        if(price){newItem.price=price}
        if(sale){newItem.sale=sale}
        if(saleDiscount){newItem.saleDiscount=saleDiscount}
        if(weights){newItem.weights=weights}
        if(Number_Of_items){newItem.Number_Of_items=quantity}
        
        // cartproduct.Number_Of_items = req.params.quantity;
        cartproduct = await CartData.findOneAndUpdate(req.params.title, {$set:newItem}, { new: true });
        res.status(200).json(cartproduct);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get('/getItemQuantity/:id', fetchuser, async (req, res) => {
    try {
        const cartproduct = await CartData.findById(req.params.id);
        res.status(200).json(cartproduct.Number_Of_items);
    }
    catch (err) {
        // res.status(400).json({ message: err.message });
    }
})

router.get('/getItembyTitle/:title', fetchuser, async (req, res) => {
    try {
        const cartproduct = await CartData.findOne({ title: req.params.title });
        res.status(200).json(cartproduct);
    }
    catch (err) {
        // res.status(400).json({ message: err.message });
    }
})



router.get('/getCart', fetchuser, async (req, res) => {
    let cartItems = await CartData.find({ userId: req.user.id });
    res.json(cartItems);
    // console.log(cartItems);
})




















module.exports = router;