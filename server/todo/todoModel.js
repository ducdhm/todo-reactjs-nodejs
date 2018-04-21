var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
    text: String,
    completed: {type: Boolean, default: false}
});

// Ensure virtual fields are serialised.
TodoSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = mongoose.model('Todo', TodoSchema);