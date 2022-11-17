import express from "express"
import {
  getAllComments,
  addComment,
} from "../controllers/commentsController.js"
import jwtAuth from "../utils/jwtAuth.js"

const router = express.Router()

router.get("/comments", getAllComments)
router.post("/add", jwtAuth, addComment)

export default router
