const routerFunctionality = require('express').Router()
const controllerFunctionalities = require('../controllers/functionality')
const { functionalityNameExist, existPriority, existState, projectExist } = require('../middleware/queriesVerification')
const Auth = require('../middleware/Auth');

routerFunctionality.post('/save-functionality', Auth.isAuth, functionalityNameExist, projectExist, existPriority, existState, controllerFunctionalities.saveFunctionality)
routerFunctionality.get('/list-functionalities', Auth.isAuth, controllerFunctionalities.listFunctionalities)
routerFunctionality.get('/list-functionalities/:id', Auth.isAuth, controllerFunctionalities.listFunctionality)
routerFunctionality.put('/update-functionality/:id', Auth.isAuth, existPriority, existState, controllerFunctionalities.updateFuncionality)
routerFunctionality.delete('/delete-functionality/:id', Auth.isAuth, controllerFunctionalities.deleteFunctionality)
module.exports = {
    routerFunctionality
}