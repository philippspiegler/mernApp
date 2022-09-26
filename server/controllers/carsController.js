import carsModel from "../models/wheelsModel.js"

const getAllCars = async (req, res) => {
  const allCars = await carsModel.find({}).populate({ path: "history" })
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
  const carById = await carsModel.findById({ _id: req.params.carId })
  // .populate({ path: "history" })
  console.log("carById :>> ", carById)
  //response to front end (fetch it there)
  res.status(200).json({
    car: carById,
  })
}

export { getAllCars, getCarById }
