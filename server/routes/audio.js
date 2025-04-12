const express = require('express');
const db = require('../models');
const { generatePresignedUrl } = require("../services/s3");
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("getting audio data");
    try{
        const data = await db.Audio.findAll();
        const processedData = await Promise.all(data.map(async (entry) => {
            const photoPresignedUrl = await generatePresignedUrl(entry.photo_filename);
            const audioPresignedUrl = await generatePresignedUrl(entry.audio_filename);
            entry.photo_filename = photoPresignedUrl;
            entry.audio_filename = audioPresignedUrl;
            
            return entry;
        }));
        res.json(processedData);
    }
    catch(err){
        console.error(err);
        res.json(null);
    }
});


module.exports = router;