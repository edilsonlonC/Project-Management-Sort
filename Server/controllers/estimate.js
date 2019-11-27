const { connection } = require('../Database/DB')
const { estimate } = require('../estimate/estimate')

let createEstimateInitialModel = async (req, res) => {
    let date = new Date(Date.now());
<<<<<<< HEAD
    let { prec, flex, rels, team, pmat, linesCode, idProject } = req.body
    if (!idProject) return res.status(404).send({ok  : false ,message : 'proyecto no existe'})
=======
    let { prec, flex, resl, team, pmat, codeLines, idProject } = req.body
    if (!idProject) return res.status(404).send({ ok: false, message: 'proyecto no existe' })
>>>>>>> 545e7ddee940bb8c34844e59af29784c018c7b4a
    // multiplicadores de esfuerzo diseño inicial 
    let { rcpx, ruse, pdif, pers, prex, fcil, sced } = req.body
    prec = parseFloat(prec)
    flex = parseFloat(flex)
    rels = parseFloat(rels)
    team = parseFloat(team)
<<<<<<< HEAD
    pmat= parseFloat(pmat)
    linesCode = Number(linesCode)
=======
    pmat = parseFloat(pmat)
    codeLines = Number(codeLines)
>>>>>>> 545e7ddee940bb8c34844e59af29784c018c7b4a

    let ems = [rcpx, ruse, pdif, pers, prex, fcil, sced]
    let EMS = []
    for (let pos in ems) {
        if (typeof ems[pos] !== 'undefined') {
            EMS.push(parseFloat(ems[pos]))
        }
    }
<<<<<<< HEAD
    //[prec, flex, rels, team, pmat]
    let resultEstimate = estimate([prec, flex, rels, team, pmat],EMS,linesCode)
   
=======
    //[prec, flex, resl, team, pmat]
    let resultEstimate = estimate([prec, flex, resl, team, pmat], EMS, codeLines)

>>>>>>> 545e7ddee940bb8c34844e59af29784c018c7b4a
    try {
        let estimateCreated = await connection.query('INSERT INTO Estimacion (PM,E,TDEV,F,proyecto_id_estimacion) values (?,?,?,?,?)', [resultEstimate.PM, resultEstimate.E, resultEstimate.TDEV, resultEstimate.F, idProject])
        return res.status(201).send({
            ok: true,
            resultEstimate
        })
    } catch (error) {
        return res.status(500).send({
            ok: false,
            error
        })
    }

}

let createEstimatePostArchitecture = async (req, res) => {
    let date = new Date(Date.now());
<<<<<<< HEAD
    let { prec, flex, rels, team, pmat, linesCode,idProject } = req.body
    if (!idProject) return res.status(404).send({ok  : false ,message : 'proyecto no existe'})
=======
    let { prec, flex, resl, team, pmat, codeLines, idProject } = req.body
    if (!idProject) return res.status(404).send({ ok: false, message: 'proyecto no existe' })
>>>>>>> 545e7ddee940bb8c34844e59af29784c018c7b4a
    // multiplicadores de esfuerzo post Arquitectura 
    let { rely, data, docu, cplx, reuse, time, stor, pvol, acap, alexp, pcap, pexp, lexp, pcon, tool, site, sced } = req.body
    prec = parseFloat(prec)
    flex = parseFloat(flex)
    rels = parseFloat(rels)
    team = parseFloat(team)
<<<<<<< HEAD
    pmat= parseFloat(pmat)
    linesCode = Number(linesCode)
    console.log('prec',prec);
    
    let ems = [rely,data,docu,cplx,reuse,time,stor,pvol,acap,alexp,pcap,pexp,lexp,pcon,tool,site,sced]
=======
    pmat = parseFloat(pmat)
    codeLines = Number(codeLines)
    console.log('prec', prec);

    let ems = [rely, data, docu, cplx, reuse, time, stor, pvol, acap, alexp, pcap, pexp, lexp, pcon, tool, site, sced]
>>>>>>> 545e7ddee940bb8c34844e59af29784c018c7b4a
    let EMS = []
    for (let pos in ems) {
        if (typeof ems[pos] !== 'undefined') {
            EMS.push(parseFloat(ems[pos]))
        }
    }
<<<<<<< HEAD
    //[prec, flex, rels, team, pmat]
    let resultEstimate = estimate([prec, flex, rels, team, pmat],EMS,linesCode)
   
=======
    //[prec, flex, resl, team, pmat]
    let resultEstimate = estimate([prec, flex, resl, team, pmat], EMS, codeLines)

>>>>>>> 545e7ddee940bb8c34844e59af29784c018c7b4a
    try {
        let estimateCreated = await connection.query('INSERT INTO Estimacion (PM,E,TDEV,F,proyecto_id_estimacion) values (?,?,?,?,?)', [resultEstimate.PM, resultEstimate.E, resultEstimate.TDEV, resultEstimate.F, idProject])
        return res.status(201).send({
            ok: true,
            resultEstimate
        })
    } catch (error) {
        return res.status(500).send({
            ok: false,
            error
        })
    }

}




let listEstimate = async (req, res) => {

    try {
        let estimateListQuery = connection.query('SELECT * FROM Estimacion')
        if (!estimateListQuery) return res.status(404).send({
            ok: false,
            message: 'No hay Estimaciones creadas'
        })
        return res.status(200).send({
            ok: true,
            estimateListQuery
        })
    } catch (err) {
        return res.status(500).send({
            ok: false,
            err
        })
    }
}


module.exports = {
    createEstimateInitialModel,
    listEstimate,
    createEstimatePostArchitecture
}

