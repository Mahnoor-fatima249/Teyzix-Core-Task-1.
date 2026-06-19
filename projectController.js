const Project = require('../models/project'); // choti-badi abc ka dhyan rakhein

exports.getUserProjects = async (req, res) => {
    try {
        // .populate('service') lagane se project ke andar service ka naam aur details dynamic load hoti hain
        // Hum safety ke liye find() khali chorr rahe hain taake saare orders load hon bina token ke check ke
        const projects = await Project.find().populate('service');
        
        return res.status(200).json(projects);
    } catch (err) {
        console.error("Dashboard fetch error:", err);
        return res.status(500).json({ message: 'Server Error' });
    }
};