const {Schema, model} = require('mongoose');

const userCreatedTrailSchema = new Schema (
{
    name: {
        type:String,
        required: [true, 'Name is required']
    },
    profileImage: {
        type:String, 
        required: [true, 'Profile picure is required']
    },
    mountain_name: {
        type: String 
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    distance: {
        type: Number
    },
    average_time: {
        type: Number
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
},
{
    timestamps: true
}
)

const UserCreatedTrail = model("UserCreatedTrail", userCreatedTrailSchema);
module.exports = UserCreatedTrail;