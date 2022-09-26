import storiesModel from "../models/storiesModel.js"

const getAllHistory = async (req, res) => {
  const allHistory = await storiesModel.find({}).populate({ path: "car" })
  console.log("allHistory :>> ", allHistory)
  try {
    if (allHistory.length === 0) {
      res.status(200).json({
        msg: "no history for this car",
      })
    } else {
      res.status(200).json({
        // can also delete curly and send as just an array
        allHistory,
        //if above comment, delete number property
        number: allHistory.length,
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: "server failed",
      error: error,
    })
  }
}

export { getAllHistory }
