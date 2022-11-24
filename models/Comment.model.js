const {Schema, model} = require('mongoose');

const commentSchema = new Schema(
{
    user: {
        type: String
    },
    comment: {
        type: String
    }, 
    trail: {
        type: Schema.Types.ObjectId, ref: "UserCreatedTrail"
    }
},
{
    timestamps: true
}
)

const comment = model("comment", commentSchema);
module.exports = comment;