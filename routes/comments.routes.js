const router = require('express').Router();
const Comment = require('../models/Comment.model');
const UserCreatedTrail = require('../models/User.created.trail.model');

router.post('/comments', async (req, res, next) => {
    try {
        const{user, comment, trail} = req.body;
        const createdcomment = await Comment.create({user,comment,trail})

        await UserCreatedTrail.findByIdAndUpdate(trail, {$push: {comments: createdcomment._id}})

        res.status(200).json(createdcomment);

    } catch (error) {
        res.json(error)
        next(error)
    }
})

router.get('/comments', async (req, res, next) => {
    try {
        const createdComments = await Comment.find();
        res.status(200).json(createdComments)
    } catch (error) {
        next(error)
    }
})

router.put('/comments/:id', async(req, res , next) => {
   try {
    const {id} = req.params;
    const {comment} = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
        id, {comment}, {new:true}
    )
    res.status(200).json(updatedComment);
   } catch (error) {
     next(error);
   }
})

router.delete('/comments/:id', async(req, res, next) =>{
    try {
        const {id} = req.params;
        await Comment.findByIdAndRemove(id);
        res.status(200).json({message: `The comment with id: ${id} was deleted`})
    } catch (error) {
        next(error)
    }
})

module.exports = router;