const express = require('express');
const db = require('../models');
const { generatePresignedUrl } = require("../services/s3");
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const data = await db.About.findByPk(1);
        const filename = data.filename;
        const presignedUrl = await generatePresignedUrl(filename);
        data.filename = presignedUrl;
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json(null);
    }
});


module.exports = router;