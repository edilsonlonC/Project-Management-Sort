let routerResources = require('express').Router()
let controllerResources = require('../controllers/resources')
let {projectExist,nameResourceExist , existPriority , existState} = require('../middleware/queriesVerification')
const Auth = require('../middleware/Auth');

routerResources.post('/save-resource', Auth.isAuth, projectExist, nameResourceExist, existPriority, existState, controllerResources.saveResource)
routerResources.get('/list-resources', Auth.isAuth, controllerResources.listResources)
routerResources.get('/list-resources/:id', Auth.isAuth, controllerResources.listResource)
routerResources.put('/update-resource/:id', Auth.isAuth, existPriority, existState, controllerResources.updateResource)
routerResources.delete('/delete-resource/:id', Auth.isAuth, controllerResources.deleteResource)
module.exports= {
    routerResources
}