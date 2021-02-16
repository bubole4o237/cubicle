const express = require('express');

const config = require('./config/config');

const app = express();

app.get('/', (req, res) => {
    res.send("It's working now!");
});
 
app.listen(config.PORT, () => console.log(`The server is running on port ${config.PORT}...`));
 
  