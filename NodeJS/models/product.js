const mongoose = require('mongoose');

var Product = mongoose.model('Product', {
     productid: { type: String },
     productname: { type: String },
     productdetails: { type: String },
     productprice: { type: Number },
     productimg: { type: String }
});

module.exports = { Product };