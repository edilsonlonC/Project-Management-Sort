const { connection } = require('../Database/DB');
const bcrypt = require('bcrypt');

let home = async (req, res) => {
    return res.status(200).send({ message: 'home' })

}



let saveuser = async (req, res) => {
    let { name, lastname, password, email } = req.body;
    console.log(name, lastname, password, email);

    if (!name || !lastname || !password || !email) return res.status(404).send({ message: 'Faltan datos' });
    password = await bcrypt.hash(password, 10);
    try {
        let existingUser = await connection.query('SELECT correo FROM Usuarios where correo = ?', [email]);
        if (existingUser[0].length > 0) return res.status(404).send({ message: 'El usuario ya existe ' })
        let userSaved = await connection.query('INSERT INTO Usuarios (Nombre_usuario,contrasenia,correo,Apellido_usuario,Rol_Usuario_id_Rol_Usuario) values (?,?,?,?,?)', [name, password, email, lastname,2])
        if (!userSaved) return res.status(500).send('Error al guardar usuario')
        return res.status(200).send({ userSaved })
    } catch (error) {
        return res.status(500).send({ error });
    }


}

let listUsers = async (req, res) => {

    try {
        let queryUsers = await connection.query('SELECT Nombre_usuario , Apellido_usuario , Correo , id_usuarios , rol from Usuarios ')
        if (queryUsers[0].length <= 0) return res.status(200).send({ message: 'No se encuentran usuarios' })
        let listUsers = queryUsers[0];
        return res.status(200).send({ listUsers });
    } catch (err) {
        return res.status(500).send(err)
    }
}


let listUser = async (req, res) => {
    let { id } = req.params;
    console.log(req.params);
    console.log(id);
    try {
        let queryuser = await connection.query('SELECT Nombre_usuario , Apellido_usuario , Correo , Correo , id_usuarios , rol from Usuarios WHERE id_usuarios = ?', id)
        let User = queryuser[0]
        if (User.length <= 0) return res.status(404).send({ message: 'El usuario no existe' })
        return res.status(200).send({ User })
    } catch (error) {
        return res.status(500).send({ error });
    }



}


let updateUser = async (req, res) => {
    let { name, lastname } = req.body;
    let { id } = req.params;
    try {
        let UserUpdate = await connection.query('UPDATE Usuarios SET Nombre_usuario=? , Apellido_usuario = ? where id_usuarios = ? ', [name, lastname, id])
        if (UserUpdate[0].affectedRows === 0) return res.status(200).send({ message: 'El usuario no existe' })
        return res.status(200).send({ UserUpdate })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

let deleteUser = async (req, res) => {
    let { id } = req.params;
    try {
        let queryDeleteUser = await connection.query('DELETE  FROM Usuarios Where id_usuarios = ?', [id])
        if (queryDeleteUser[0].affectedRows === 0) return res.status(404).send({ message: 'El usuario no existe' });
        return res.status(200).send({ queryDeleteUser })
    } catch (error) {
        return res.status(500).send({ error })
    }
}
module.exports = {
    home,
    saveuser,
    listUsers,
    listUser,
    updateUser,
    deleteUser
} 