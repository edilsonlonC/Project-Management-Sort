const routerProject = require('express').Router();
const controllesProjects = require('../controllers/project');

routerProject.get('/list-projects', controllesProjects.projects);
routerProject.post('/save-project/:id', controllesProjects.saveProject);
routerProject.put('/update-project/:id', controllesProjects.updateProject);
routerProject.delete('/delete-project/:id', controllesProjects.deleteProject);
routerProject.get('/list-projects/:id', controllesProjects.listProject);

module.exports = {
    routerProject
}