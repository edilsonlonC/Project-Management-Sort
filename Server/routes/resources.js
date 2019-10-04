let routerResources = require('express').Router()
let controllerResources = require('../controllers/resources')
let {projectExist,nameResourceExist , existPriority , existState} = require('../middleware/queriesVerification')


routerResources.post('/save-resource', projectExist, nameResourceExist, existPriority, existState, controllerResources.saveResource)
routerResources.get('/list-resources',controllerResources.listResources)
routerResources.get('/list-resources/:id',controllerResources.listResource)
routerResources.put('/update-resource/:id',existPriority, existState, controllerResources.updateResource)
routerResources.delete('/delete-resource/:id',controllerResources.deleteResource)
module.exports= {
    routerResources
}