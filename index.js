const express = require('express');
const config = require('./config/config');
const app = express();

/* 
const setupExpress = require('./config/express');
setupExpress(app); 
*/ 
// The next line do the same thing like the 2 lines above
require('./config/express')(app);

app.get('/', (req, res) => {
    res.render('home', {layout: false});
});
 
app.listen(config.PORT, () => console.log(`The server is running on port ${config.PORT}...`));