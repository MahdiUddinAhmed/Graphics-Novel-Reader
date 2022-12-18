const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        unique: true },
    id: { 
        type: Number, 
        required: true, 
    },
    pages: { type: Array },
}, 
    { timestamps: true },
    { collection: "chapters" });

module.exports = mongoose.model("Chapter", ChapterSchema);