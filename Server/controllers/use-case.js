const { connection } = require('../Database/DB')


let useCase = async (req, res) => {

    let { UUCP, UCP, E, idProject } = req.body
    if (!UUCP || !UCP || !E || !idProject) return res.status(400).send({ messsage: 'datos incompletos' })
    UUCP= parseFloat(UUCP)
    UCP = parseFloat(UCP)
    E = parseFloat(E)

    try {
        query = await connection.query(`INSERT INTO Casos_uso (UUCP,UCP,E,proyecto_id_casos_uso) VALUES(${UUCP},${UCP},${E},${idProject})`)
        return res.status(200).send({
            query,
            ok:true
        })
    } catch (error) {
        return res.status(500).send({ error, 
                                ok: false })
    }
}
module.exports = {
    useCase
}