import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, require: true },
  email: {
    type: String,
    uniqe: true,
    require: true,
  },
  password: {
    type: String,
    uniqe: true,
  },
  OTP: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
