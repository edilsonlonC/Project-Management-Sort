const connection = require('../Database/DB');


let saveActivity = async (req, res) => {
    return res.status(200).send({ message: 'save activity ' });
}


module.exports = {
    saveActivity
}