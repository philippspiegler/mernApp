import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarPicture: {
    type: String,
  },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "comment" },
})

const userModel = mongoose.model("user", userSchema)
export default userModel
