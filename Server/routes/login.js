const routerLogin = require('express').Router();
const controllerLogin = require('../controllers/login');

routerLogin.post('/login',controllerLogin.login);

module.exports = {
    routerLogin
}