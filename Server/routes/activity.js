const routerActivity = require('express').Router();
const controllerActivity = require('../controllers/activity');

routerActivity.get('/save-activity',controllerActivity.saveActivity);

module.exports = {
    routerActivity
}