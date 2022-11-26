const router = require('express').Router();
const Mountain = require('../models/Mountain.model');

//creating the mountains
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
        overview, 
        books_links
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
        overview,
        books_links
    })
    res.status(201).json(newMountain)
    
   } catch (error) {
        res.json(error);
        next(error);
   }
})

//getting all the mountains 
router.get('/mountains', async (req, res, next) => {
    try {
        const allMountains = await Mountain.find()
        console.log(allMountains);
        res.status(200).json(allMountains);
        
    } catch (error) {
        next(error);
    }
})

//get a single mountain

router.get('/mountains/:id', async (req, res, next) => {
    try {
     const {id} = req.params;
     const singleMountain = await Mountain.findById(id);
     res.status(200).json(singleMountain)
    } catch (error) {
      next(error)  
    }
})

module.exports = router;