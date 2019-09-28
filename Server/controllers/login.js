const jwt = require('jwt-simple'); 
const {connection} = require('../Database/DB');
const bcrypt = require('bcrypt');
const Keys = require('../config/secret');

let login = async (req,res) => {
    let {email , password} = req.body;
    if (!email || !password) return res.status({message : 'faltan datos'});
    try {
        let queryUser = await connection.query('SELECT Nombre_usuario , Correo , contrasenia , rol FROM Usuarios WHERE Correo = ? ',[email])
        let userData = queryUser[0];
        if (userData.length === 0) return res.status(403).send({message : `El usuario con el correo ${email} no existe `})
        console.log(userData[0]);
        // payload for token jwt
        let {Nombre_usuario , Correo ,rol} = userData[0] 
        let payload = {
            expire: Date.now() + (1000 * 60 * 60), //1 hour
            username : Nombre_usuario,
            email : Correo

        }
        bcrypt.compare(password,userData[0].contrasenia,(err,resp)=> {
            if (err) return res.status(500).send({message : `Error : ${err}`});
            if (!resp) return res.status(403).send({mesage : ' Acceso denegado'});
            let token = jwt.encode(payload,Keys.secret);
            return res.status(200).send({ token , user : {
                Nombre_usuario,
                rol,
                Correo
            } })
                                           
        });
        //return res.status(200).send({userData})
    } catch (error) {
        return res.status(500).send({error})
    }
    /* connection.query('SELECT Nombre_usuario , Correo , contrasenia FROM Usuarios WHERE Correo = ? ',[email], (err,result) => {
        if (err) return res.status(500).send({message : err});
        if (result < 1) return res.status(403).send({message : 'Acceso denegado'});
        bcrypt.compare(password,result[0].contrasenia,(err,resp)=> {
            if (err) return res.status(500).send({message : `Error : ${err}`});
            if (!resp) return res.status(403).send({mesage : ' Acceso denegado'});
            let token = jwt.encode(result,Keys.secret);
            return res.status(200).send({message : token});
        });
        
    }); */

}


module.exports={
    login
}