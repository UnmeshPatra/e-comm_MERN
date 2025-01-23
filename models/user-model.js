const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/mydatabase");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin: {
        type: Boolean,
        default: false
    },
    orders: {
        type: Array,
        default: []
    },
    contact: String,
    picture: String
});

module.exports = mongoose.model("user", userSchema);
