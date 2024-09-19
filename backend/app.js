// app.js
var express = require('express');
// require('./seedPoolsClusters'); // Automatically runs the seed script
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
require('dotenv').config();
var upload = multer();

app.use((req, res, next) => {  //CORS
    res.header('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH'); // Allow specific HTTP methods
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers
    next();
  });

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

// for parsing multipart/form-data
app.use(upload.array()); 


//auth
var auth = require('./router/auth-routers/auth-router.js')
app.use('/auth',auth);  // localhost:3000/auth
/////


//scheduler
const waitingJobsRoutes = require('./router/scheduler-routers/waitingJobs.js');
const readyJobsRoutes = require('./router/scheduler-routers/readyJobs.js');
app.use('/jobs/waitingJobs', waitingJobsRoutes);
app.use('/jobs/readyJobs', readyJobsRoutes);

//


//resources moslem
// const poolsRoutes = require('./router/resources-routers/pools.js'); // Include the pools routes
// app.use('/pools', poolsRoutes); // Use the pools routes
// 




//resources malek
const poolRoutes = require('./router/resources-routers/poolRoutes.js');
const clusterRoutes = require('./router/resources-routers/clusterRoutes.js');
const serverRoutes = require('./router/resources-routers/serverRoutes.js');

const versionRoutes = require('./router/resources-routers/versionRouter.js');

app.use('/pools', poolRoutes);        // Routes for managing pools
app.use('/clusters', clusterRoutes);  // Routes for managing clusters
app.use('/servers', serverRoutes);    // Routes for managing servers

app.use('/versions',versionRoutes)
///


// execution
const runningJobRoutes = require('./router/execution-routers/runningJob-router.js');
app.use('/jobs',runningJobRoutes);
//





//reports
const reportRoutes = require('./router/reports-routers/reports-router.js');
app.use('/reports',reportRoutes);





// Start the server
app.listen(process.env.Port, () => {
  console.log(`Server is running on port ${process.env.Port}`);
});
