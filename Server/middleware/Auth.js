const jwt = require('jwt-simple');
const key = require('../config/secret');
/* "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.W3siTm9tYnJlX3VzdWFyaW8iOiJFZGlsc29uIiwiQ29ycmVvIjoiZWRkeWxzb24ubG9uZG9uaW9AZ21haWwuY29tIiwiY29udHJhc2VuaWEiOiIkMmIkMTAkVE4yQzZMRm9UTTR0MlBiUTNkYWc0dTkvM0hWcGdXZFhITzFQR2g3YXROeU5OZk5ydlcvLnUifV0.ky_JQodF1TndBowTvmsgpF43s4cBK9WWRi_YM2Dsds0" */
let isAuth = (req,res,next)=> {
    
    let {Authorization} = req.body;
    if (Authorization) {
        Authorization = Authorization.split(' ');
        let token = Authorization[1];
        console.log('here token : ',token);
        try {
            let decoded = jwt.decode(token,key.secret,);
        console.log(decoded);
        
        next();
        
         } catch(error){
             return res.status(403).send({message:' acceso denegado'});
         }
        
    }
    else return res.status(403).send({message : 'Acceso denegado'});
        
}


module.exports = {
    isAuth
}