import mongoose, { Schema } from "mongoose"

const storiesSchema = new mongoose.Schema({
  car: { type: Schema.Types.ObjectId, ref: "car" },
  history: String,
})

const storiesModel = mongoose.model("story", storiesSchema)

export default storiesModel
