const { connection } = require('../Database/DB')


let saveResource = async (req, res) => {
    let { resourceName, description, responsable, stateType, priority, idProject } = req.body
    if (!resourceName || !description || !responsable || !stateType || !priority || !idProject) return res.status(200).send({ message: 'datos incompletos' })
    try {
        let querySavedResource = await connection.query('INSERT INTO Recursos (nombre_recurso,Descripcion,Responsable,Tipo_estado_id_estado,Prioridad_id_prioridad,Proyecto_id_proyecto) VALUES (?,?,?,?,?,?)', [resourceName, description, responsable, stateType, priority, idProject])
        return res.status(200).send({
            message: ' recurso guardado corectamente',
            querySavedResource
        });

    } catch (error) {
        return res.status(500).send({ error })
    }
    //return res.status(200).send({message : 'save resource'})
}

let listResources = async (req, res) => {
    try {
        let queryResources = await connection.query('SELECT * FROM Recursos')
        let resources = queryResources[0]
        if (resources.length === 0) return res.status(404).send({ message: 'No se encuentran recursos registrados' })
        return res.status(200).send({ resources })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let listResource = async (req, res) => {
    let { id } = req.params
    try {
        let queryResources = await connection.query('SELECT * FROM Recursos WHERE id_recursos = ? ', [id])
        let resources = queryResources[0]
        if (resources.length === 0) return res.status(404).send({ message: 'No se encuentran recursos registrados para el id' })
        return res.status(200).send({ resources })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let updateResource = async (req, res) => {
    let { resourceName, description, responsable, stateType, priority } = req.body
    let { id } = req.params
    if (!resourceName || !description || !responsable || !stateType || !priority) return res.status(200).send({ message: 'datos incompletos' })
    try {
        let queryExistActivityName = await connection.query('SELECT * FROM Recursos WHERE nombre_recurso = ? and id_recursos != ?', [resourceName, id]);
        if (queryExistActivityName[0].length > 0) return res.status(404).send({ message: `El nombre ${resourceName} ya se encuentra en uso` })
        let queryUpdateresource = await connection.query('UPDATE Recursos SET nombre_recurso = ?, Descripcion = ?,Responsable = ?,Tipo_estado_id_estado = ? ,Prioridad_id_prioridad = ? WHERE id_recursos = ? ', [resourceName, description, responsable, stateType, priority, id])
        if (queryUpdateresource[0].affectedRows === 0) return res.status(404).send({ message: 'El recurso no existe' });
        return res.status(200).send({ message: 'recurso modificado' })
    } catch (error) {
        return res.status(500).send({ error })
    }
    //return res.status(200).send({ message: 'update resorce' })
}

let deleteResource = async (req, res) => {

    let { id } = req.params
    try {
        let queryDeleteResource = await connection.query('DELETE FROM Recursos Where id_recursos = ?', [id])

        if (queryDeleteResource[0].affectedRows === 0) return res.status(404).send({ message: 'El Recurso no existe' })
        return res.status(200).send({ message: 'recurso eliminado' })
    } catch (error) {
        return res.status(500).send({ error });

    }
}

module.exports = {
    saveResource,
    listResource,
    listResources,
    updateResource,
    deleteResource
}