const Service = require('../models/Service');

// 1. Get All Services (Safely without crashing on populate)
const getServices = async (req, res) => {
    try {
        // Find services, if populate fails it will catch error instead of freezing the site
        const services = await Service.find().populate({
            path: 'provider',
            select: 'name email role'
        });
        
        return res.status(200).json({
            success: true,
            services: services || []
        });
    } catch (error) {
        console.error("Fetch Services Error:", error.message);
        
        // Fallback: Try fetching services without populate if it causes 500 error
        try {
            const basicServices = await Service.find();
            return res.status(200).json({
                success: true,
                services: basicServices || []
            });
        } catch (innerError) {
            return res.status(500).json({
                success: false,
                message: "Could not fetch services from database",
                error: innerError.message
            });
        }
    }
};

// 2. Create New Service Listing
const createService = async (req, res) => {
    try {
        const { title, description, category, price, deliveryTime } = req.body;

        if (!req.user) {
            return res.status(401).json({ success: false, message: "Unauthorized. Please Login again." });
        }

        const service = await Service.create({
            provider: req.user._id || req.user.id,
            title,
            description,
            category,
            price,
            deliveryTime
        });

        return res.status(201).json({
            success: true,
            message: "Service listed successfully!",
            service
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Could not create service",
            error: error.message
        });
    }
};

module.exports = {
    getServices,
    createService
};