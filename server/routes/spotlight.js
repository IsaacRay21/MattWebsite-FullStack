const express = require('express');
const db = require('../models');
const { generatePresignedUrl } = require("../services/s3");
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const data = await db.Spotlight.findByPk(1);
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json(null);
    }
});


module.exports = router;