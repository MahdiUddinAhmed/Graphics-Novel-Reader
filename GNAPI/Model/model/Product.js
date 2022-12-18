const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    ID: { type: Number, required: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    author: { type: String },
    status: { type: String },
    price: { type: Number, required: true },
    chapters: { type: Number, required: true },

}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);