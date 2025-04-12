const express = require('express');
const db = require('../models');
const { generatePresignedUrl } = require("../services/s3");
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const data = await db.Hero.findByPk(1);
        const photo_filename = data.photo_filename;
        const presignedUrl = await generatePresignedUrl(photo_filename);
        data.photo_filename = presignedUrl;
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json(null);
    }
});


module.exports = router;