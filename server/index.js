require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models')
const path = require('path');
const cors = require("cors");

const build = "../client/build"
const port = 3001;

app.use(cors());
app.use(express.json());


const aboutRoutes = require('./routes/about');
const photoRoutes = require('./routes/photo');
const videoRoutes = require('./routes/video');
const audioRoutes = require('./routes/audio');
const heroRoutes = require('./routes/hero');
const linkRoutes = require('./routes/link');
const spotlightRoutes = require('./routes/spotlight');

app.use('/api/about', aboutRoutes);
app.use('/api/photo', photoRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/audio', audioRoutes);
app.use('/api/hero', heroRoutes);
app.use('/api/link', linkRoutes);
app.use('/api/spotlight', spotlightRoutes);


app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

  
db.sequelize.sync()
    .then(() => {
        app.listen(port, () => {
                console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    }
);