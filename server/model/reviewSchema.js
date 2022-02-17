const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    doctorsId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
