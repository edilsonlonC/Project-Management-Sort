const routerProject = require('express').Router();
const controllesProjects = require('../controllers/project');
const Auth = require('../middleware/Auth');

routerProject.get('/list-projects', Auth.isAuth, controllesProjects.projects);
routerProject.post('/save-project/:id', Auth.isAuth, controllesProjects.saveProject);
routerProject.put('/update-project/:id', Auth.isAuth, controllesProjects.updateProject);
routerProject.delete('/delete-project/:id', Auth.isAuth, controllesProjects.deleteProject);
routerProject.get('/list-projects/:id', Auth.isAuth, controllesProjects.listProject);

module.exports = {
    routerProject
}