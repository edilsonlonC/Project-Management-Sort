const jwt = require('jwt-simple'); 
const {connection} = require('../Database/DB');
const bcrypt = require('bcrypt');
let login = (req,res) => {
    let {email , password} = req.body;
    connection.query('SELECT Nombre_usuario , Correo , contrasenia FROM Usuarios WHERE Correo = ? ',[email], (err,result) => {
        if (err) return res.status(500).send({message : err});
        if (result < 1) return res.status(403).send({message : 'Acceso denegado'});
        bcrypt.compare(password,result[0].contrasenia,(err,resp)=> {
            if (err) return res.status(500).send({message : `Error : ${err}`});
            if (!resp) return res.status(403).send({mesage : ' Acceso denegado'});
            let token = jwt.encode(result,'12345');
            return res.status(200).send({message : token});
        });
        
    });

}


module.exports={
    login
}