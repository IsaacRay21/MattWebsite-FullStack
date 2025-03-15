const express = require('express');
const app = express();
const path = require('path');
const db = require('./models')

const build = "../client/build"
const port = 3000;

app.use(express.static(path.join(build, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(build, 'build', 'index.html'));
});
  
// db.sequelize.sync().then(() =>{
//     app.listen(port, () =>{
//         console.log(`Server running on http://localhost:${port}`)
//     });
// });

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
});