const routerTask = require('express').Router()
const controllerTask = require('../controllers/task')
const {projectExist,existState,existPriority,taskNameExist} = require('../middleware/queriesVerification')
const Auth = require('../middleware/Auth');

routerTask.post('/save-task', Auth.isAuth, projectExist,existState, existPriority, taskNameExist,controllerTask.saveTask)
routerTask.get('/list-tasks', Auth.isAuth, controllerTask.listTasks)
routerTask.get('/list-tasks/:id', Auth.isAuth, controllerTask.listTask)
routerTask.put('/update-task/:id', Auth.isAuth, existState,existPriority,controllerTask.updatetask)
routerTask.delete('/delete-task/:id', Auth.isAuth, controllerTask.deleteTask)

module.exports = {
    routerTask
}


