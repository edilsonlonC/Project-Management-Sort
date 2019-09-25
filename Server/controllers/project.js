const {connection} = require('../Database/DB');



let saveProject = (req,res) => {
    let {projectName} = req.body;
    if (!projectName) return res.status(404).send({message : 'parametros invalidos'});
    connection.query('SELECT Nombre_Proyecto FROM Proyecto WHERE Nombre_Proyecto = ? ' ,[projectName], (err,result)=> {  
        if (err) return res.status(500).send({ err});
        if (result.length >= 1) return res.status(404).send({message : `El proyecto ${projectName} ya existe`});
        connection.query('INSERT INTO Proyecto (Nombre_Proyecto) values(?)',[projectName],(err2,result2)=>{
            if (err) return res.status(500).send({message : err2})
            return res.status(200).send({message : result2});
        })
        
    })
    
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