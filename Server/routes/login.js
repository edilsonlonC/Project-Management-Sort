const routerLogin = require('express').Router();
const controllerLogin = require('../controllers/login');
routerLogin.get('/login',controllerLogin.login);

module.exports = {
    routerLogin
}