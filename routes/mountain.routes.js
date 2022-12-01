const router = require('express').Router();
const Mountain = require('../models/Mountain.model');
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const User = require('../models/User.model');


//creating the mountains
router.post('/mountains', isAuthenticated, async(req, res, next) => {
   try {
    const userId = req.payload._id; 
    const { 
        continent,
        country,
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


    const newMountain = await Mountain.create( {
        continent,
        country,
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
        books_links, 
        userId 
        /* req.body */
        
    })
    await User.findByIdAndUpdate(userId, {$push: {createdMountains: newMountain._id}});

    res.status(201).json(newMountain);

    
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

//editing a mountain

router.put('/mountains/:id', isAuthenticated ,async(req, res, next) => {
    try{
    const {id} = req.params;
    const userId = req.payload._id;
    const {
        continent,
        country,
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
        overview} = req.body;

    const updatedMountain = await Mountain.findByIdAndUpdate(
    id, 
        {
        continent,
        country,
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
        },
        {new:true}
    )
    

    res.status(200).json(updatedMountain);
    } catch(error) {
        next(error)
    }
})

//next we are going to delete the mountain
router.delete('/mountains/:id', isAuthenticated, async(req, res, next) => {
    try {
        const userId = req.payload._id;
        const {id} = req.params;
        await Mountain.findByIdAndRemove(id);

        res.status(200).json({ message: `The trail with the id ${id} was successfully deleted.`})

    } catch (error) {
        next(error);
    }
})

module.exports = router;