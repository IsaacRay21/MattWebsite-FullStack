const express = require('express');
const app = express();
const db = require('./models')

const port = 3000;

db.sequelize.sync().then(() =>{
    app.listen(port, () =>{
        console.log(`Server running on http://localhost:${port}`)
    });
});