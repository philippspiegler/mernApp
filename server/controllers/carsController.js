import carsModel from "../model/wheelsModel.js"

const getAllCars = async (req, res) => {
  const allCars = await carsModel.find({})
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

export { getAllCars }
