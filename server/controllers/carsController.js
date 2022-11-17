import carsModel from "../models/wheelsModel.js"
import { v2 as cloudinary } from "cloudinary"

const uploadCarPicture = async (req, res) => {
  try {
    console.log("req.file :>> ", req.file)
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "mern",
    })
    console.log("uploadResult :>> ", uploadResult)
    const car = await carsModel.findByIdAndUpdate(
      { _id: req.params.carId },
      { image: uploadResult.url },
      {
        new: true,
      }
    )
    console.log("car", car)
    res.status(200).json({
      message: "image upload successful",
      car,
    })
  } catch (error) {
    console.log("error", error)
    res
      .status(500)
      .json({ message: "image couldn't be uploaded", error: error })
  }
}

const getAllCars = async (req, res) => {
  const allCars = await carsModel
    .find({})
    .populate({
      path: "comments",
      populate: {
        path: "authorId",
        model: "user",
      },
    })
    .populate({ path: "history" })
  console.log("allCars>>>", allCars)
  try {
    if (allCars.length === 0) {
      res.status(200).json({
        msg: "no cars in the DB anymore",
      })
    } else {
      res.status(200).json({
        // can also delete curly and send as just an array
        allCars,
        //if above comment, delete number property
        number: allCars.length,
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: "server failed",
      error: error,
    })
  }
}

const getCarById = async (req, res) => {
  console.log("req.params :>> ", req.params)
  const carById = await carsModel
    .findById({ _id: req.params.carId })
    .populate({
      path: "comments",
      populate: {
        path: "authorId",
        model: "user",
      },
    })
    .populate({ path: "history" })
  console.log("carById :>> ", carById)
  //response to front end (fetch it there)
  res.status(200).json({
    car: carById,
  })
}

export { getAllCars, getCarById, uploadCarPicture }
