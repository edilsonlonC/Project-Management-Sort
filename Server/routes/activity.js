const routerActivity = require('express').Router();
const controllerActivity = require('../controllers/activity');
const {projectExist , activityNameExist , existState , existPriority} = require('../middleware/queriesVerification')

routerActivity.post('/save-activity',projectExist, activityNameExist, existPriority, existState,controllerActivity.saveActivity);
routerActivity.get('/list-activities',controllerActivity.listAvtivities)
routerActivity.get('/list-activities/:id',controllerActivity.listActivity)
routerActivity.put('/update-activity/:id' ,existState,existPriority, controllerActivity.updateActivity)
routerActivity.delete('/delete-activity/:id',controllerActivity.deleteActivity)

module.exports = {
    routerActivity
}