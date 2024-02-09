const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema({
    subject:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    space:{
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("lesson", lessonSchema);