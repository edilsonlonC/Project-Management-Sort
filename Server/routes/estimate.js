const routerEstimate = require('express').Router()
const EstimateController = require('../controllers/estimate')
const { projectExist } = require('../middleware/queriesVerification')

routerEstimate.post('/estimate/initial/model',projectExist,EstimateController.createEstimateInitialModel)
routerEstimate.post('/estimate/post/architecture',projectExist,EstimateController.createEstimatePostArchitecture)
//routerEstimate.get('/estimate',projectExist, EstimateController.listEstimate)

module.exports={
    routerEstimate
}