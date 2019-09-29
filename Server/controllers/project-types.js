const { connection } = require('../Database/DB');


let projectsTypes = (req, res) => {
    connection.query('SELECT * FROM Tipo_Proyecto', (err, result) => {
        if (err) return res.status(500).send({ message: `error ${err}` });
        if (result.length < 1) return res, status(404).send({ message: 'No hay tipos en la base de datos ' });
        return res.status(200).send({ types: result });
    })

}

module.exports = {
    projectsTypes
}