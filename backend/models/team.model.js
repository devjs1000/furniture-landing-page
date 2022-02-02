import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 2,
    },
    quote: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 2,
    },
    profilePicture: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 5,
    },
  },
  {
    timestamps: false,
  }
);

const User = new mongoose.model("User", userSchema);

export default User;
