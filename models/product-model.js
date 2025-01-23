const mongoose = require("mongoose");



const productSchema = mongoose.Schema({
    image: String,
    name: String,
    prize: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolour: String,
    panelcour: String,
    textcolour: String
});

module.exports = mongoose.model("product", productSchema);
