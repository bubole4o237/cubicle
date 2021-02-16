const express = require('express');
const config = require('./config/config');
const routes = require('./routes');
const app = express();

/* 
const setupExpress = require('./config/express');
setupExpress(app); 
*/          // The next line do the same thing like the 2 lines above
require('./config/express')(app);

app.use(routes);
 
app.listen(config.PORT, () => console.log(`The server is running on port ${config.PORT}...`));