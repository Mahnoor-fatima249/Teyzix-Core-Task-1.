const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
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
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    requirements: {
        type: String,
        required: [true, 'Please add project requirements']
    },
    budget: {
        type: Number,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'In Progress', 'Completed', 'Delivered'],
        default: 'Pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', ProjectSchema);