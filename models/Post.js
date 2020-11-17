const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');



const PostSchema = mongoose.Schema({
    title: String,
    description: String,
    ingredients: String,
    preparing: String
})

module.exports = mongoose.model('Posts', PostSchema);