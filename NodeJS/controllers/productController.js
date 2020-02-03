const express = require('express');
const multer = require('multer');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Product } = require('../models/product');

// => localhost:3000/products/
router.get('/', (req, res) => {
    Product.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Product.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Product :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    var emp = new Product({
        productid: req.body.productid,
        productname: req.body.productname,
        productdetails: req.body.productdetails,
        productprice: req.body.productprice,
        productimg: req.body.productimg,
        
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        productid: req.body.productid,
        productname: req.body.productname,
        productdetails: req.body.productdetails,
        productprice: req.body.productprice,
        productimg: req.body.productimg,
    };
    Product.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Product Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;