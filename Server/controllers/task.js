const { connection } = require('../Database/DB');


let saveTask = async (req, res) => {
    let date = new Date(Date.now());
    let { taskName, description, responsable, stateType, priority, idProject } = req.body
    if (!taskName || !description || !responsable || !stateType || !priority || !idProject) return res.status(404).send({ message: 'datos incompletos here' })
    try {
        let querySavedTask = await connection.query('INSERT INTO Tareas (nombre_tarea,descripcion,responsable,Proyecto_id_proyecto , Tipo_estado_id_estado,Prioridad_id_prioridad,fecha) VALUES (?,?,?,?,?,?,?)',
            [taskName, description, responsable, idProject, stateType, priority, date])
        return res.status(200).send({ message: 'tarea guardada' })
    } catch (error) {
        return res.status(500).send({ error });
    }
}
let listTasks = async (req, res) => {
    try {
        let queryListTasks = await connection.query('SELECT * FROM Tareas')
        let listTasks = queryListTasks[0]
        if (listTasks.length == 0) return res.status(404).send({ message: 'No hay tareas que mostrar' })
        return res.status(200).send({ listTasks });
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let listTask = async (req, res) => {
    let { id } = req.params
    try {
        let queryTask = await connection.query('SELECT * FROM Tareas WHERE id_tareas = ?', [id])
        let task = queryTask[0]
        if (task.length == 0) return res.status(404).send({ message: 'La tarea no existe' })
        return res.status(200).send({ task })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let updatetask = async (req, res) => {
    let { id } = req.params;
    let { taskName, description, responsable, stateType, priority } = req.body
    if (!taskName || !description || !responsable || !stateType || !priority) return res.status(404).send({ message: 'datos incompletos' })
    try {
        let queryExistNameTask = await connection.query('SELECT nombre_tarea FROM Tareas WHERE nombre_tarea = ? AND id_tareas!= ? ', [taskName, id])
        if (queryExistNameTask[0].length > 0) return res.status(404).send({ message: `El nombre ${taskName} ya se encuentra en uso` })
        let queryUpdateTask = await connection.query('UPDATE Tareas SET  nombre_tarea = ?, descripcion = ?,responsable = ?,Tipo_estado_id_estado = ?,Prioridad_id_prioridad = ? WHERE id_tareas = ?',
            [taskName, description, responsable, stateType, priority, id])
        if (queryUpdateTask[0].affectedRows === 0) return res.status(404).send({ message: 'La tarea no existe' })

        return res.status(200).send({ message: 'tarea modificada' })

    } catch (error) {
        return res.status(500).send({ error })
    }
}

let deleteTask = async (req, res) => {
    let { id } = req.params
    try {
        let queryDeleteTask = await connection.query('DELETE FROM Tareas WHERE id_tareas = ?',[id])
        if (queryDeleteTask[0].affectedRows == 0) return res.status(404).send({message : 'la tarea no existe'})
        return res.status(200).send({message : 'Tarea eliminada'})
    } catch (error) {
        return res.status(500).send({error})
    }
}

module.exports = {
    saveTask,
    listTasks,
    listTask,
    updatetask,
    deleteTask
}