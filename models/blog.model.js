const { Schema, model } = require('mongoose');

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    img: String,
    author: String,
    active: {
        type: Boolean,
        default: false
    },
    create: {
        type: Date,
        default: Date.now()
    },
    published: {
        type:Date
    }
});

module.exports = model('blog', BlogSchema);
