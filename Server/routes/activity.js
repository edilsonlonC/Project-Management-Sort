const routerActivity = require('express').Router();
const controllerActivity = require('../controllers/activity');
const {projectExist , activityNameExist , existState , existPriority} = require('../middleware/queriesVerification')
const Auth = require('../middleware/Auth');

routerActivity.post('/save-activity', Auth.isAuth, projectExist, activityNameExist, existPriority, existState,controllerActivity.saveActivity);
routerActivity.get('/list-activities', Auth.isAuth, controllerActivity.listAvtivities)
routerActivity.get('/list-activities/:id', Auth.isAuth, controllerActivity.listActivity)
routerActivity.put('/update-activity/:id', Auth.isAuth, existState,existPriority, controllerActivity.updateActivity)
routerActivity.delete('/delete-activity/:id', Auth.isAuth, controllerActivity.deleteActivity)

module.exports = {
    routerActivity
}