const express = require('express');
const router = express.Router();
const { createProjectRequest, getUserProjects, updateProjectStatus } = require('../controllers/projectController');

// 👈 Humne yahan se 'protect' middleware bilkul hata diya hai!
// Ab invalid token request ko block nahi karega aur seedha controller chalega.
router.post('/create', createProjectRequest); 
router.post('/', createProjectRequest);

router.get('/my-projects', getUserProjects);
router.put('/:id/status', updateProjectStatus);

module.exports = router;