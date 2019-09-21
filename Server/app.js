const express = require('express')
const app = express();
const {router} = require('./routes/user');
const {routerLogin}= require('./routes/login');
const port = process.env.PORT || 3000;
//middelware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api',router);
app.use('/api',routerLogin);

// server started
app.listen(port , (err) => {
    if (err) return console.log(err);
    console.log(`server is http://localhost:${port}`);
})
