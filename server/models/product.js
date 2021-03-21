const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required."],
        minLength: [2, "Product title must be at least 2 characters long."]
    },    
    price: {
        type: Number,
        required: [true, "Product price is required."],
        max: [100000, "That's way too expensive, price must be less than 100000."]
    },
    description: {
        type: String,
        default: "No Description Available"
    }
}, {timestamps: true});

module.exports.Product = mongoose.model("Product", ProductSchema)