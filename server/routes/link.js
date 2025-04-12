const express = require('express');
const db = require('../models');
const { generatePresignedUrl } = require("../services/s3");
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("getting link data");
    try{
        const data = await db.Link.findAll();
        await Promise.all(data.map(async (entry) => {
            const photoPresignedUrl = await generatePresignedUrl(entry.link_photo_filename);
            entry.link_photo_filename = photoPresignedUrl;
            
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