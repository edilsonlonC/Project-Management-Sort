const { connection } = require('../Database/DB');


let saveActivity = async (req, res) => {
    let date = new Date(Date.now());
    let { activityName, description, responsable, stateType, priority, idProject } = req.body
    if (!activityName || !description || !responsable || !stateType || !priority || !idProject) return res.status(404).send({ message: 'datos incompletos' })
    try {
        let querySavedActivity = await connection.query('INSERT INTO Actividades (nombre_actividad,descripcion,responsable,Proyecto_id_proyecto , Tipo_estado_id_estado,Prioridad_id_prioridad,fecha) VALUES (?,?,?,?,?,?,?)',
            [activityName, description, responsable, idProject, stateType, priority, date])
        return res.status(200).send({ message: 'Actividad creada' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let listAvtivities = async (req, res) => {
    try {
        let queryListActivities = await connection.query('SELECT * FROM Actividades')
        let listAvtivities = queryListActivities[0];
        if (listAvtivities.length === 0) return res.status(404).send({ message: 'No se encuentran actividades' })
        return res.status(200).send({ listAvtivities });
    } catch (error) {
        return res.status(500).send(error)
    }
}

let listActivity = async (req, res) => {
    let { id } = req.params
    try {
        let queryActivity = await connection.query('SELECT * FROM Actividades WHERE id_actividades = ? ', [id])
        let activity = queryActivity[0];
        if (activity.length == 0) return res.status(404).send({ message: 'La Actividad no existe ' })
        return res.status(200).send({ activity });
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let updateActivity = async (req, res) => {
    let { id } = req.params;
    let { activityName, description, responsable, stateType, priority } = req.body
    if (!activityName || !description || !responsable || !stateType || !priority) return res.status(404).send({ message: 'datos incompletos' })
    try {
        let queryExistmNameActivity = await connection.query('SELECT nombre_actividad  FROM Actividades WHERE nombre_actividad = ? AND id_actividades != ? ', [activityName, id])
        if (queryExistmNameActivity[0].length > 0) return res.status(404).send({ message: `El nombre ${activityName} ya se encuentra en uso` })
        let queryUpdateActivity = await connection.query('UPDATE Actividades SET  nombre_actividad = ?, descripcion = ?,responsable = ?,Tipo_estado_id_estado = ?,Prioridad_id_prioridad = ? WHERE id_actividades = ?',
            [activityName, description, responsable, stateType, priority, id])
        if (queryUpdateActivity[0].affectedRows === 0) return res.status(404).send({ message: 'La activdad no existe' })

        return res.status(200).send({ message: 'Actividad modificada' })

    } catch (error) {
        return res.status(500).send({ error })
    }

}

let deleteActivity = async (req, res) => {
    let { id } = req.params
    try {
        let queryDelete = await connection.query('DELETE FROM Actividades WHERE id_actividades = ?', [id]);
        if (queryDelete[0].affectedRows == 0) return res.status(404).send({ mesage: 'la actividad no existe' })
        return res.status(200).send({ message: 'Actividad eliminada' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

module.exports = {
    saveActivity,
    listAvtivities,
    listActivity,
    updateActivity,
    deleteActivity
}