const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    productname: {
        type: String,
        trim: true,
    },
    prize: {
        type: Number,
        trim: true,
    },
    productnumber: {
        type: Number,
        trim: true,
    },
});

const product = mongoose.model("userschema" , userSchema);

module.exports = product;