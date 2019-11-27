
const fs = require('fs')
const path = require('path')
let pdf = require('html-pdf')
const { connection } = require('../Database/DB')

let createReport = async(req, res) => {
  let { id } = req.params
  console.log(id);
  
  try{

    projectQuery = await connection.query(`SELECT * FROM Proyecto WHERE id_proyecto = ${id}`)
    if (projectQuery[0].length === 0) return res.status(400).send({message: 'el proyecto no existe'})
    let {id_proyecto,Nombre_Proyecto,Usuarios_id_usuarios} = projectQuery[0][0]
    
    let userQuery = await connection.query(`SELECT Nombre_usuario FROM Usuarios WHERE id_usuarios = ${Usuarios_id_usuarios}`)
    let admin = userQuery[0][0].Nombre_usuario
    let estimateQuery = await connection.query(`SELECT TDEV , PM FROM Estimacion WHERE proyecto_id_estimacion = ${id_proyecto}`)
    let useCaseQuery = await connection.query(`SELECT id_caso,UUCP, UCP, E FROM Casos_uso WHERE proyecto_id_casos_uso = ${id_proyecto} ORDER BY id_caso DESC` )
     let template = path.join(__dirname, '../Reports/template.html')
    let html = fs.readFileSync(template, 'utf8')
    let options = {
      format: 'letter',
    }
     html = html.replace('{{date}}',`${new Date(Date.now()).getDay()}-${new Date(Date.now()).getMonth()}-${new Date(Date.now()).getFullYear()}`)
     html = html.replace('{{admin}}',admin) 
     html= html.replace('{{idProject}}',id_proyecto)
     html = html.replace('{{Nombre}}',Nombre_Proyecto)
     if(estimateQuery[0].length > 0) {
      html = html.replace('{{{cocomoII_tiempo_calendario}}}',Math.round(estimateQuery[0][0].TDEV))
      html = html.replace('{{cocomoII_persona_mes}}',Math.round(estimateQuery[0][0].PM)) 
    }else {
      html = html.replace('{{cocomoII_tiempo_calendario}}','no aplica')
      html = html.replace('{{cocomoII_persona_mes}}','no aplica') 
    }
    if (useCaseQuery[0].length > 0){
      html = html.replace('{{casos_uso_esfuerzo}}',Math.round(useCaseQuery[0][0].E))
     //html = html.replace('{{caso_uso_costo}}',useCaseQuery[0][0].UCP) 
    }else {
      html = html.replace('{{casos_uso_esfuerzo}}','no aplica')
      //html = html.replace('{{caso_uso_costo}}','-') 
    }
    pdf.create(html, options).toFile('test.pdf', function (err, r) {
      if (err) return res.send(err)
      return res.download('test.pdf', 'reporte.pdf')
    })
    
  }catch(err){
    return res.status(500).send({err})
  }

}

module.exports = {
  createReport
}