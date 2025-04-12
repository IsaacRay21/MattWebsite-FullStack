const express = require('express');
const db = require('../models');
const { generatePresignedUrl } = require("../services/s3");
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("getting video data");
    try{
        const data = await db.Video.findAll();
        await Promise.all(data.map(async (entry) => {
            const videoPresignedUrl = await generatePresignedUrl(entry.video_filename);
            entry.video_filename = videoPresignedUrl;
            
            return entry;
        }));
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json(null);
    }
});


module.exports = router;