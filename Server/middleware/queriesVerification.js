const { connection } = require('../Database/DB');


let projectExist = async (req, res, next) => {
    let { idProject } = req.body;
    if (!idProject) return res.status(404).send({ message: 'faltan datos ' })
    try {
        let queryExistProject = await connection.query('SELECT id_proyecto FROM Proyecto WHERE id_Proyecto = ? ', [idProject]);
        if (queryExistProject[0].length == 0) return res.status(404).send({ message: 'El proyecto que quiere aignar no existe' });
        next()
    } catch (error) {
        return res.status(200).send({ error });
    }
}

let nameResourceExist = async (req, res, next) => {

    let { resourceName } = req.body
    if (!resourceName) return res.status(404).send({ message: 'faltan datos ' })
    try {
        let queryExistResourceName = await connection.query('SELECT * FROM Recursos WHERE nombre_recurso = ?', [resourceName]);
        if (queryExistResourceName[0].length > 0) return res.status(404).send({ message: `El nombre ${resourceName} ya se encuentra en uso` })
        next()
    } catch (error) {
        return res.staus(500).send({ error });

    }

}

let activityNameExist = async (req,res,next) => {

    let { activityName } = req.body
    if (!activityName) return res.status(404).send({ message: 'faltan datos ' })
    try {
        let queryExistActivityName = await connection.query('SELECT * FROM Actividades WHERE nombre_actividad = ?', [activityName]);
        if (queryExistActivityName[0].length > 0) return res.status(404).send({ message: `El nombre ${activityName} ya se encuentra en uso` })
        next()
    } catch (error) {
        return res.status(500).send({ error });

    }
}
let taskNameExist = async (req,res,next) =>{

    let { taskName } = req.body
    if (!taskName) return res.status(404).send({ message: 'faltan datos ' })
    try {
        let queryExistTaskname = await connection.query('SELECT * FROM Tareas WHERE nombre_tarea = ?', [taskName]);
        if (queryExistTaskname[0].length > 0) return res.status(404).send({ message: `El nombre ${taskName} ya se encuentra en uso` })
        next()
    } catch (error) {
        return res.status(500).send({ error });

    }
}


let existPriority = async (req, res, next) => {
    let { priority } = req.body
    if (!priority) return res.status(404).send({message : 'faltan datos prioridad '})
    try {
        let queryExistPriority = await connection.query('SELECT * FROM  Prioridad WHERE id_prioridad = ? ', [priority]);
        if (queryExistPriority[0].length === 0) return res.status(404).send({ message: ' verificar la  prioridad ' })
        next()
    } catch (error) {
        return res.status(500).send({error})
    }
}

let existState = async (req,res,next) => {
    let { stateType } = req.body
    if (!stateType) return res.status(404).send({message : 'faltan datos estado '})
    try {
        let queryExistState = await connection.query('SELECT * FROM  Tipo_estado WHERE id_estado = ? ', [stateType]);
        if (queryExistState[0].length === 0) return res.status(404).send({ message: ' verificar el estado ' })
        next()
    } catch (error) {
        return res.status(500).send({error})
    }
}



module.exports = {
    projectExist,
    nameResourceExist,
    existPriority,
    existState,
    activityNameExist,
    taskNameExist
}