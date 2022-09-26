import mongoose from "mongoose"

const carsSchema = new mongoose.Schema({
  make: { type: String, required: true, unique: true },
  model: { type: String, required: true, unique: true },
  year: { type: Number, required: true, unique: true },
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: "story" }],
})

const carsModel = mongoose.model("car", carsSchema)

export default carsModel
