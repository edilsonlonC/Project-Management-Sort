const routerCases = require('express').Router()
const useCaseController = require('../controllers/use-case')
const { projectExist } = require('../middleware/queriesVerification')
routerCases.post('/estimate/use/case', projectExist, useCaseController.useCase)

module.exports= {
    routerCases
}