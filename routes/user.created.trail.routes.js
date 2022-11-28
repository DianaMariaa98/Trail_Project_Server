const router = require('express').Router();
const Mountain = require('../models/Mountain.model');
const UserCreatedTrail = require('../models/User.created.trail.model');



//Posting the route so we can create something
router.post('/trail', async (req, res, next) => {
    try {
        const {
        name,
        mountain,
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

        const newCreatedTrail = await UserCreatedTrail.create({
            name,
            mountain,
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
        await Mountain.findByIdAndUpdate(mountain, {$push:{createdTrails: newCreatedTrail._id}});
        res.status(201).json(newCreatedTrail)
    } catch (error) {
        res.json(error)
        next(error)
    }
})
//Here we are getting the trails that we've created
router.get('/allTrails', async(req, res, next) => {
    try {
        const createdTrails = await UserCreatedTrail.find()
        res.status(200).json(createdTrails);
    } catch (error) {
        next(error)
    }
})
//here we are editing our trail
router.put('/trail/:id', async(req, res, next) => {
    try{
    const {id} = req.params;
    const {
        name,
        profileImage,
        mountain,
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

    const updatedTrail = await UserCreatedTrail.findByIdAndUpdate(
    id, 
        {
        name,
        profileImage,
        mountain,
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

    res.status(200).json(updatedTrail);
    } catch(error) {
        next(error)
    }
})

//next we are going to delete the trail
router.delete('/trail/:id', async(req, res, next) => {
    try {
        
        const {id} = req.params;
        await UserCreatedTrail.findByIdAndRemove(id);

        res.status(200).json({ message: `The trail with the id ${id} was successfully deleted.`})

    } catch (error) {
        next(error);
    }
})


module.exports = router;
