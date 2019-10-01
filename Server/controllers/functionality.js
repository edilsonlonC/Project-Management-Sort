const { connection } = require('../Database/DB')

let saveFunctionality = async (req, res) => {
    let date = new Date(Date.now());
    let { functionalityName, description, responsable, stateType, priority, idProject } = req.body
    if (!functionalityName || !description || !responsable || !stateType || !priority || !idProject) return res.status(404).send({ message: 'datos incompletos here' })
    try {
        let querySavedFunctionality = await connection.query('INSERT INTO Funcionalidades (nombre_funcionalidad,descripcion,responsable,Proyecto_id_proyecto , Tipo_estado_id_estado,Prioridad_id_prioridad,fecha) VALUES (?,?,?,?,?,?,?)',
            [functionalityName, description, responsable, idProject, stateType, priority, date])
        return res.status(200).send({ message: 'Funcionalidad Guardada' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let listFunctionalities = async (req, res) => {
    try {
        let queryListFunctionalities = await connection.query('SELECT * FROM Funcionalidades')
        let listFunctionalities = queryListFunctionalities[0]
        if (listFunctionalities.length === 0) return res.status(404).send({ message: 'No hay funcionalidades que mostrar' })
        return res.status(200).send({ listFunctionalities })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let listFunctionality = async (req, res) => {
    let { id } = req.params
    try {
        let queryFunctionality = await connection.query('SELECT * FROM Funcionalidades WHERE id_funcionalidad = ?', [id])
        let functionality = queryFunctionality[0]
        if (functionality.length === 0) return res.status(404).send({ message: 'La funcionalidad no existe' })
        return res.status(200).send({ functionality })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let updateFuncionality = async (req, res) => {
    let { id } = req.params;
    let { functionalityName, description, responsable, stateType, priority } = req.body
    if (!functionalityName || !description || !responsable || !stateType || !priority) return res.status(404).send({ message: 'datos incompletos' })
    try {
        let queryExistNameFuncionality = await connection.query('SELECT nombre_funcionalidad FROM Funcionalidades WHERE nombre_funcionalidad = ? AND id_funcionalidad != ? ', [functionalityName, id])
        if (queryExistNameFuncionality[0].length > 0) return res.status(404).send({ message: `El nombre ${functionalityName} ya se encuentra en uso` })
        let queryUpdateFuncionality = await connection.query('UPDATE Funcionalidades SET  nombre_funcionalidad = ?, descripcion = ?,responsable = ?,Tipo_estado_id_estado = ?,Prioridad_id_prioridad = ? WHERE id_funcionalidad = ?',
            [functionalityName, description, responsable, stateType, priority, id])
        if (queryUpdateFuncionality[0].affectedRows === 0) return res.status(404).send({ message: 'La Funcionalidad no existe' })

        return res.status(200).send({ message: 'Funcionalidad modificada' })

    } catch (error) {
        return res.status(500).send({ error })
    }
}

let deleteFunctionality = async (req, res) => {
    let { id } = req.params
    try {
        let queryDeleteFunctionality = await connection.query('DELETE FROM Funcionalidades WHERE id_funcionalidad = ?', [id]);
        if (queryDeleteFunctionality[0].affectedRows == 0) return res.status(404).send({ message: 'La funcionalidad no existe ' })
        return res.status(200).send({ message: 'La funcionalidad ha sido eliminada' })
    } catch (error) {
        return res.status(500).send({ error })
    }
}


module.exports = {
    saveFunctionality,
    listFunctionalities,
    listFunctionality,
    updateFuncionality,
    deleteFunctionality
}