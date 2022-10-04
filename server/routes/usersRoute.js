import express from "express"
import { uploadUserPicture, signUp } from "../controllers/usersController.js"
import { multerUploads } from "../middlewares/multer.js"

const router = express.Router()

router.post("/imageUpload", multerUploads.single("image"), uploadUserPicture)

export default router
