import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userAuthSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4,
    },

    password: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 6,
    },
  },
  {
    timestamps: false,
  }
);

const UserAuth = new mongoose.model("user-auths", userAuthSchema);

export default UserAuth;
