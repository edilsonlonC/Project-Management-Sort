const express = require('express')
const app = express();
const {router} = require('./routes/user');
const {routerLogin}= require('./routes/login');
const {routerProject} = require('./routes/project');
const {routerProjectTypes} = require('./routes/project-types');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
//middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api',router);
app.use('/api',routerLogin);
app.use('/api',routerProject);
app.use('/api',routerProjectTypes);


// server started
app.listen(port , (err) => {
    if (err) return console.log(err);
    console.log(`server is http://localhost:${port}`);
})
