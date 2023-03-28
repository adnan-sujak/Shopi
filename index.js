// Packages Import Statr 

const exprEng = require('express');
const body = require('body-parser');
const shopiAppPath = require('path');
const routs = require('./routing/allRouts.js');
const appCookies = require('cookie-parser');



// express start 

const carApp = exprEng();

// express end

// ejs start 

carApp.set('view engine', 'ejs');




// body parser start 

carApp.use(body.urlencoded({ extended: true }));

carApp.use(body.json());



// appCookies start 


carApp.use(appCookies());




// routes start

carApp.get('/', (req, res) =>
{
    res.redirect('/shopi/index');
});

carApp.use('/shopi', routs);




// resources start

carApp.use('/resources', exprEng.static(shopiAppPath.join(__dirname, 'resources')));


// set port 4000 stat


carApp.listen(4000, () =>
{
    console.log('shopi app listening on port 4000');
});

