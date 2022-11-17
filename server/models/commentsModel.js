import mongoose from "mongoose"

const commentsSchema = new mongoose.Schema({
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
})

const commentsModel = mongoose.model("comment", commentsSchema)
export default commentsModel
