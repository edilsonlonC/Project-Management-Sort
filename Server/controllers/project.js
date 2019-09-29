const { connection } = require('../Database/DB');


/// modificar, validar primero si el usuario existe
let saveProject = async (req, res) => {
    let { id } = req.params; // User id for relational project 
    let { projectName, type } = req.body;

    if (!projectName || !type) return res.status(404).send({ message: 'Datos incompletos' })
    try {
        let queryUser = await connection.query('SELECT Correo FROM Usuarios WHERE id_usuarios = ?', [id])
        let user = queryUser[0];
        if (user.length === 0) return res.status(404).send({ message: 'El usuario no existe ' })
        let queryProjectSaved = await connection.query('INSERT INTO Proyecto (Nombre_Proyecto,Tipo_Proyecto_id_Tipo,Usuarios_id_usuarios ) values (?,?,?)', [projectName, type, id])
        return res.status(200).send({ queryProjectSaved });
    } catch (error) {
        return res.status(500).send({ error })
    }
}
let projects = async (req, res) => {
    try {
        let projectsQuery = await connection.query('SELECT * FROM Proyecto')
        let projects = projectsQuery[0];
        if (projects.length === 0) return res.status(404).send({ message: 'no existen proyectos' });
        return res.status(200).send({ projects });
    } catch (error) {
        return res.status(500).send({ error })

    }

}

let listProject = async (req, res) => {
    let { id } = req.params;
    try {
        let queryProject = await connection.query('SELECT * FROM Proyecto WHERE id_proyecto = ? ', [id])
        let project = queryProject[0];
        if (project.length === 0) return res.status(404).send({ message: 'El proyecto no existe' });
        return res.status(200).send({ project });
    } catch (error) {
        return res.status(500).send({ error })
    }
}
let updateProject = async (req, res) => {
    let { id } = req.params;
    let { projectName, type } = req.body;
    try {
        let queryUpdateProject = await connection.query('UPDATE Proyecto SET Nombre_Proyecto = ? , Tipo_Proyecto_id_Tipo = ? WHERE id_proyecto = ? ', [projectName, type, id])
        if (queryUpdateProject[0].affectedRows === 0) return res.status(404).send({ message: 'El proyecto no existe ' });
        return res.status(200).send({ message: 'El proyecto ha sido modificado ' })
    } catch (error) {
        return res.status(500).send({ error })

    }
    //res.status(200).send({ message: 'update project' });
}

let deleteProject = async (req, res) => {
    let { id } = req.params;
    let queryDeleteProject = await connection.query('DELETE FROM Proyecto WHERE id_proyecto = ? ', [id]);
    if (queryDeleteProject[0].affectedRows === 0) return res.status(404).send({ message: 'El proyecto no existe ' });
    return res.status(200).send({ message: 'proyecto elminado' });
}


module.exports = {
    projects,
    saveProject,
    updateProject,
    deleteProject,
    listProject
}