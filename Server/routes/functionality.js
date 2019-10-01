const routerFunctionality = require('express').Router()
const controllerFunctionalities = require('../controllers/functionality')
const { functionalityNameExist, existPriority, existState, projectExist } = require('../middleware/queriesVerification')

routerFunctionality.post('/save-functionality', functionalityNameExist, projectExist, existPriority, existState, controllerFunctionalities.saveFunctionality)
routerFunctionality.get('/list-functionalities', controllerFunctionalities.listFunctionalities)
routerFunctionality.get('/list-functionalities/:id', controllerFunctionalities.listFunctionality)
routerFunctionality.put('/update-functionality/:id', existPriority, existState, controllerFunctionalities.updateFuncionality)
routerFunctionality.delete('/delete-functionality/:id', controllerFunctionalities.deleteFunctionality)
module.exports = {
    routerFunctionality
}