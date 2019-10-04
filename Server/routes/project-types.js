const routerProjectTypes = require('express').Router();
const controllerProjectType = require('../controllers/project-types');

routerProjectTypes.get('/project-types', controllerProjectType.projectsTypes);

module.exports = {
    routerProjectTypes
}