const {Schema, model} = require('mongoose');

const userCreatedTrailSchema = new Schema (
{
    name: {
        type:String,
        required: [true, 'Name is required']
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    distance: {
        type: String
    },
    average_time: {
        type: String
    },
    start_point: {
        type: String
    },
    end_point: {
        type: String
    },
    season: {
        type: String
    },
    difficulty: {
        type: String
    },
    maps: {
        type: String
    },
    conditions: {
        type: String
    },
    accomodation: {
        type: String
    },
    overview: {
        type: String
    }, 
    mountain: {
        type:String
    }, 
    comments: [{
        type:Schema.Types.ObjectId, ref:'Comment'
    }]
},
{
    timestamps: true
}
)

const UserCreatedTrail = model("UserCreatedTrail", userCreatedTrailSchema);
module.exports = UserCreatedTrail;