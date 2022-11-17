import commentsModel from "../models/commentsModel.js"
import wheelsModel from "../models/wheelsModel.js"
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

const addComment = async (req, res) => {
  console.log("req.user", req.user)
  console.log("req.body", req.body)

  //create new object with above data
  const comment = new commentsModel({
    authorId: req.user._id,
    text: req.body.text,
    date: new Date(),
  })
  try {
    const savedComment = await comment.save()
    console.log("savedComment", savedComment)
    if (savedComment) {
      await wheelsModel.findByIdAndUpdate(req.body.carId, {
        $push: { comments: savedComment._id },
      })

      res.status(200).json({
        msg: "success",
      })
    }
  } catch (error) {
    res.status(500).json({
      msg: "server failed",
      error,
    })
  }
}

export { getAllComments, addComment }
