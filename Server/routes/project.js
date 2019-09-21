const routerProject = require('express').Router(); 
const controllesProjects = require('../controllers/project');

routerProject.get('/projects',controllesProjects.projects);

module.exports = {
    routerProject
}