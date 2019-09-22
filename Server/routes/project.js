const routerProject = require('express').Router(); 
const controllesProjects = require('../controllers/project');

routerProject.get('/projects',controllesProjects.projects);
routerProject.post('/save-project',controllesProjects.saveProject);
routerProject.put('/update-project',controllesProjects.updateProject);
routerProject.delete('/delete-project',controllesProjects.deleteProject);

module.exports = {
    routerProject
}