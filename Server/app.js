const express = require('express')
const app = express();
const { router } = require('./routes/user');
const { routerLogin } = require('./routes/login');
const { routerProject } = require('./routes/project');
const { routerProjectTypes } = require('./routes/project-types');
const { routerResources } = require('./routes/resources');
const { routerActivity } = require('./routes/activity');
const { routerTask } = require('./routes/task')
const { routerFunctionality } = require('./routes/functionality')
const { routerEstimate } = require('./routes/estimate')
const { routerCases } = require('./routes/use-case')
const { routerReport} = require('./routes/report')

const morgan = require('morgan');
//  local and cloud port 
const port = process.env.PORT || 3000;
//middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

// cors 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// routes
app.use('/api', router);
app.use('/api', routerLogin);
app.use('/api', routerProject);
app.use('/api', routerProjectTypes);
app.use('/api', routerResources);
app.use('/api', routerActivity);
app.use('/api', routerTask);
app.use('/api', routerFunctionality);
app.use('/api', routerEstimate);
app.use('/api', routerCases);
app.use('/api', routerReport);

// server started
app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`server is http://localhost:${port}`);
})
