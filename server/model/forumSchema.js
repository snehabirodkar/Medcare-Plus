const mongoose = require("mongoose");

const forumSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
})

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
