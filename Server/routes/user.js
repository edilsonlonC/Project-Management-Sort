const router = require('express').Router();
const controllerUser = require('../controllers/user');
const Auth = require('../middleware/Auth');

// Routes 
 router.get('/', controllerUser.home);
 router.post('/save-user', Auth.isAuth, controllerUser.saveuser);
 router.get('/list-users', Auth.isAuth, controllerUser.listUsers);
 router.get('/list-users/:id', Auth.isAuth, controllerUser.listUser);
 router.put('/update-user/:id', Auth.isAuth, controllerUser.updateUser);
 router.delete('/delete-user/:id', Auth.isAuth, controllerUser.deleteUser)


module .exports = {
    router
}