import mongoose from "mongoose"

const carsSchema = new mongoose.Schema({
  make: { type: String, required: true, unique: true },
  model: { type: String, required: true, unique: true },
  year: { type: Number },
  image: { type: String, required: true },
  history: { type: mongoose.Schema.Types.ObjectId, ref: "story" },
  image: { type: String },
  comments: {
    type: Array,
    comment: {
      type: Object,
      authorId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
      author: { type: String, required: true },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  },
})

const carsModel = mongoose.model("car", carsSchema)

export default carsModel
