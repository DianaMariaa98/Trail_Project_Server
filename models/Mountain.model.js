const {Schema, model} = require('mongoose');

const mountainSchema = new Schema(
{   
    userId: {
        type: Schema.Types.ObjectId, ref: "User"
    },
    continent: {
        type:String
    },
    country: {
        type:String
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
    books_links: {
        type:String
    },
    
    
}, 
{
    timestamps: true
}  

)

const Mountain = model("Mountain", mountainSchema);
module.exports = Mountain;