const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    lessonID:{
        type: Number,
    },
    name:{
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    numberOfSpace:{
        type: Number,
    },
});
module.exports = mongoose.model("Order", orderSchema);