var mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        require: true,
        type: mongoose.Schema.Types.ObjectId,
    }
});

module.exports = {Todo};