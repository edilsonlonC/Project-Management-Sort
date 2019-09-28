let routerResources = require('express').Router()
let controllerResources = require('../controllers/resources')


routerResources.post('/save-resource', controllerResources.saveResource)
routerResources.get('/list-resources',controllerResources.listResources)
routerResources.get('/list-resources/:id',controllerResources.listResource)
routerResources.put('/update-resource/:id',controllerResources.updateResource)
routerResources.delete('/delete-resource/:id',controllerResources.deleteResource)
module.exports= {
    routerResources
}