import commentsModel from "../models/commentsModel.js"

const getAllComments = async (req, res) => {
  const allComments = await commentsModel.find()
  console.log("allComments", typeof allComments)
  try {
    if (allComments.length === 0) {
      res.status(500).json({
        msg: "no comments yet",
      })
    } else {
      res.status(201).json({
        allComments,
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: "server failed",
      error,
    })
  }
}

export { getAllComments }
