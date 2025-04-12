const express = require('express');
const db = require('../models');
const { generatePresignedUrl } = require("../services/s3");
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("getting all photo data");
    try{
        const data = await db.Photo.findAll();
        await Promise.all(data.map(async (entry) => {
            const photoPresignedUrl = await generatePresignedUrl(entry.photo_filename);
            entry.photo_filename = photoPresignedUrl;
            
            return entry;
        }));
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json(null);
    }
});

router.get('/maincarousel', async (req, res) => {
    console.log("getting main carousel photo data");
    try{
        const data = await db.Photo.findAll({
            where: {
                'main_carousel': true,
            }
        }); 
        await Promise.all(data.map(async (entry) => {
            const photoPresignedUrl = await generatePresignedUrl(entry.photo_filename);
            entry.photo_filename = photoPresignedUrl;
            
            return entry;
        }));
        res.json(data);
    }
    catch(err){
        console.error(err);
        res.json(null);
    }
});

router.get('/storycarousel', async (req, res) => {
    console.log("getting story carousel data");
    try{
        const data = await db.Photo.findAll({
            where: {
                'story_carousel': true,
            }
        }); 
        await Promise.all(data.map(async (entry) => {
            const photoPresignedUrl = await generatePresignedUrl(entry.photo_filename);
            entry.photo_filename = photoPresignedUrl;
            
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