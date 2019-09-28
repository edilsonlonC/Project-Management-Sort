const router = require('express').Router();
const controllerUser = require('../controllers/user');
const Auth = require('../middleware/Auth');

// Routes 
<<<<<<< HEAD
router.get('/', controllerUser.home);
router.post('/save-user', controllerUser.saveuser);
router.get('/list-users', Auth.isAuth, controllerUser.listUsers);
router.get('/list-users/:id', controllerUser.listUser);
router.put('/update-user/:id', controllerUser.updateUser);
router.delete('/delete-user/:id', controllerUser.deleteUser)
=======
 router.get('/', controllerUser.home);
 router.post('/save-user', controllerUser.saveuser);
 router.get('/list-users',controllerUser.listUsers);
 router.get('/list-users/:id',controllerUser.listUser);
 router.put('/update-user/:id',controllerUser.updateUser);
 router.delete('/delete-user/:id',controllerUser.deleteUser)
>>>>>>> 844ebae97fd6b23c0c16412316820281234a51c4


module .exports = {
    router
}