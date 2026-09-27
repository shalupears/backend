const mongoose = require('mongoose');

var schema= mongoose.Schema({
    Name:String,
    Disc:String,
    Price:Number,
    Image:String
})

var ProductModel=mongoose.model("product55",schema)
module.exports=ProductModel