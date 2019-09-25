const {connection} = require('../Database/DB');


/// modificar, validar primero si el usuario existe
let saveProject = (req,res) => {
    let {projectName} = req.body;
    let {id} = req.params;
    connection.query('SELECT id_usuarios FROM Usuarios WHERE id_usuarios = ? ',[id],(err0,Users) => {
        if (err0) return res.status(500).send({message : `error ${err0}`});
        if (Users.length < 1) return res.status(404).send({message : 'El usuario no existe'});
        if (!projectName) return res.status(404).send({message : 'parametros invalidos'});
        connection.query('SELECT Nombre_Proyecto FROM Proyecto WHERE Nombre_Proyecto = ? ' ,[projectName], (err,result)=> {  
            if (err) return res.status(500).send({ err});
            if (result.length >= 1) return res.status(404).send({message : `El proyecto ${projectName} ya existe`});
            connection.query('INSERT INTO Proyecto (Nombre_Proyecto) values(?)',[projectName],(err2,result2)=>{
                if (err) return res.status(500).send({message : err2})
                let {insertId} = result2
                console.log('Proyecto id',insertId);
                console.log('User id',id);
                
                connection.query('UPDATE Usuarios SET Proyecto_id_proyecto = ? WHERE id_usuarios = ? and Proyecto_id_proyecto = NUll' ,[insertId,id],(err3,success) => {
                    if (err) return res.status(500).send({message : `Error ${err3}`});
                    return res.status(200).send({success});
                })
                //return res.status(200).send({message : result2});
            })
            
        })
    })
   /*  if (!projectName) return res.status(404).send({message : 'parametros invalidos'});
    connection.query('SELECT Nombre_Proyecto FROM Proyecto WHERE Nombre_Proyecto = ? ' ,[projectName], (err,result)=> {  
        if (err) return res.status(500).send({ err});
        if (result.length >= 1) return res.status(404).send({message : `El proyecto ${projectName} ya existe`});
        connection.query('INSERT INTO Proyecto (Nombre_Proyecto) values(?)',[projectName],(err2,result2)=>{
            if (err) return res.status(500).send({message : err2})
            connection.query('UPDATE Usuarios SET Proyecto_id_proyecto = ? WHERE id_usuarios = ? ' [result2.id_proyecto,id],(err3,success) => {
                if (err) return res.status(500).send({message : `Error ${err3}`});
                return res.status(200).send({success});
            })
            //return res.status(200).send({message : result2});
        })
        
    }) */
    
}
let projects = (req,res) => {
    res.status(200).send({message : 'projects here '});
}

let updateProject = (req,res) => {
    res.status(200).send({message : 'update project'});
}

let deleteProject = (req,res) => {
    res.status(200).send({message : 'delete project'});
}


module.exports = {
    projects,
    saveProject,
    updateProject,
    deleteProject
}