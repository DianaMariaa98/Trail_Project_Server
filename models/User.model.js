const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    profilePicture: {
      type: String,
      default: 'https://res.cloudinary.com/ddywzkeit/image/upload/v1669925828/mew_pphjn0.jpg'
    },
    comments: [{
      type:Schema.Types.ObjectId, ref:'Comment'
    }],
    likedMountains: [{type: Schema.Types.ObjectId, ref:'Mountain'}],
    createdMountains: [
      {type: Schema.Types.ObjectId, ref:'Mountain'}
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
