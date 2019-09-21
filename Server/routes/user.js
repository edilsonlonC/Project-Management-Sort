const router = require('express').Router();
const controllerUser = require('../controllers/user');
router.get('/', controllerUser.home);


module .exports = {
    router
}