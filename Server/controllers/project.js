const {connection} = require('../Database/DB');

let projects = (req,res) => {
    res.status(200).send({message : 'projects here '});
}


module.exports = {
    projects
}