const {connection} = require('../Database/DB');

let home = (req,res)  => {

    return res.status(500).send({message : 'home'})
}


module.exports= {
    home,
}