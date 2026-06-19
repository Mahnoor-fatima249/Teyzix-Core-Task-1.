const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    providerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: [true, 'Please add a rating between 1 and 5'],
        min: 1,
        max: 5
    },
    feedback: {
        type: String,
        required: [true, 'Please add your feedback']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', ReviewSchema);