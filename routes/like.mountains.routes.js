const router = require('express').Router();
const User = require('../models/User.model');

router.post('/likes/:mountainId', async(req, res, next) => {
    try {
       const {userId} = req.body;
       const {mountainId} = req.params;
       await User.findByIdAndUpdate(userId, {$push : {likedMountains : mountainId}})
    } catch (error) {
        next(error)
    }
})


module.exports = router;