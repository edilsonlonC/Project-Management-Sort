const routerTask = require('express').Router()
const controllerTask = require('../controllers/task')
const {projectExist,existState,existPriority,taskNameExist} = require('../middleware/queriesVerification')
routerTask.post('/save-task',projectExist,existState, existPriority, taskNameExist,controllerTask.saveTask)
routerTask.get('/list-tasks',controllerTask.listTasks)
routerTask.get('/list-tasks/:id',controllerTask.listTask)
routerTask.put('/update-task/:id',existState,existPriority,controllerTask.updatetask)
routerTask.delete('/delete-task/:id' ,controllerTask.deleteTask)

module.exports = {
    routerTask
}


