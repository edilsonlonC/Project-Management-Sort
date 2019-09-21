const {connection} = require('../Database/DB');
const bcrypt = require('bcrypt');

let home = (req,res)  => {

    return res.status(200).send({message : 'home'})
}

let saveuser = async (req,res) => {
    let {name , lastname , password , email} = req.body;
    if (!name || !lastname || !password || !email) return res.status(404).send({message : 'Faltan datos'});
    password = await bcrypt.hash(password,10);
    connection.query('SELECT correo FROM Usuarios where correo = ?',[email],(err,result) => {
        if (err) return res.status(500).send({message: err});
        if (result.length < 1){
            connection.query('INSERT INTO Usuarios (Nombre_usuario,contrasenia,correo,Apellido_usuario) values (?,?,?,?)', [name , password ,email , lastname], (err,result) => {
                if (err) return res.status(404).send({message : err});
                if (!result) return res.status(500).send({message : 'Usuario no guardado'});
                return res.status(200).send({result});
            });
        }else return res.status(200).send({message : `${email} ya se encuenta registrado`});
    })
    
    
}

let listUsers = (req,res) => {
    connection.query('SELECT Nombre_usuario , Apellido_usuario , Correo from Usuarios ' , (err,result) => {
        if (err) return res.status(500).send({message : err});
        if (result < 1) return res.status(404).send({message : 'no hay usuarios registrados'});
        return res.status(200).send({result});
    })
}

let  listUser = (req, res) => {
    let {id} = req.params;
    console.log(req.params);
    console.log(id);
    
    connection.query('SELECT Nombre_usuario , Apellido_usuario , Correo from Usuarios WHERE id_usuarios = ?',id, (err,result) => {
        if (err) return res.status(500).send({message : err});
        if (result.length < 1) return res.status(404).send({message : 'El usuario no existe'})
        return res.status(200).send(result);
    })

}

let updateUser = (req,res) => {
    let {name , lastname } = req.body;
    let {id} = req.params;
    connection.query('UPDATE Usuarios SET Nombre_usuario=? , Apellido_usuario = ? where id_usuarios = ? ' ,[name ,lastname,id], (err,result) => {
        if (err) return res.status(500).send({message : err});
        if (result.changedRows === 0) return res.status(404).send({mesage : 'Usuario inexistente'});
        return res.status(200).send({result});   
    })
}

let deleteUser = (req,res) => {
    let { id } = req.params;
    connection.query('DELETE  FROM Usuarios Where id_usuarios = ?',[id],(err,result) => {
        if (err) return res.status(500).send({message : err});
        if (result.affectedRows === 0) return res.status(404).send({message : 'el Usuario no existe'});
        return res.status(200).send({result});
    });
}
module.exports= {
    home,
    saveuser,
    listUsers,
    listUser,
    updateUser,
    deleteUser
}