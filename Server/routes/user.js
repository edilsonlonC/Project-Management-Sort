const router = require('express').Router();
const controllerUser = require('../controllers/user');
const Auth = require('../middleware/Auth');

// Routes 
router.get('/', controllerUser.home);
router.post('/save-user', controllerUser.saveuser);
router.get('/list-users',Auth.isAuth,controllerUser.listUsers);
router.get('/list-users/:id',controllerUser.listUser);
router.put('/update-user/:id',controllerUser.updateUser);


module .exports = {
    router
}