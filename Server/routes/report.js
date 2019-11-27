const routerReport = require('express').Router()
const reportController = require('../controllers/report')

routerReport.get('/report/:id',reportController.createReport)

module.exports = {
    routerReport
}