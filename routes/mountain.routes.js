const router = require('express').Router();
const Mountain = require('../models/Mountain.model');

router.get('/mountains', async (req, res, next) => {
    try {
        const allMountains = await Mountain.find()
        console.log(allMountains);
        res.status(200).json(allMountains);
        
    } catch (error) {
        next(error);
    }
})

router.post('/mountains', async(req, res, next) => {
   try {
    const { 
        mountain_name, 
        image,
        description,
        distance,
        average_time,
        start_point,
        end_point,
        season,
        difficulty,
        maps,
        conditions,
        accomodation,
        overview
        } = req.body;

    const newMountain = await Mountain.create({ 
        mountain_name, 
        image,
        description,
        distance,
        average_time,
        start_point,
        end_point,
        season,
        difficulty,
        maps,
        conditions,
        accomodation,
        overview
    })
    res.status(201).json(newMountain)
   } catch (error) {
        res.json(error);
        next(error);
   }
})

module.exports = router;