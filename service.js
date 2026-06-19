const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Isko standard capital 'User' rakhin, agar niche compile issue ho to check karein
        required: true
    },
    title: {
        type: String,
        required: [true, 'Please add a service title'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    category: {
        type: String,
        required: [true, 'Please select a category']
    },
    price: {
        type: String,
        required: [true, 'Please add a price']
    },
    deliveryTime: {
        type: String,
        required: [true, 'Please add delivery time']
    }
}, {
    timestamps: true
});

module.exports = mongoose.models.Service || mongoose.model('Service', serviceSchema);