import express from "express"
import { getAllComments } from "../controllers/commentsController.js"
const router = express.Router()

router.get("/comments", getAllComments)

export default router
