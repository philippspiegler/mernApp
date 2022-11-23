import express from "express"
import {
  uploadUserPicture,
  signUp,
  login,
  getProfile,
  uploadNewCarImage,
} from "../controllers/usersController.js"
import { multerUploads } from "../middlewares/multer.js"
import jwtAuth from "../utils/jwtAuth.js"

const router = express.Router()

router.post("/imageUpload", multerUploads.single("image"), uploadUserPicture)
router.post(
  "/imageUploadCar",
  multerUploads.array(("images", 3), uploadNewCarImage)
)
router.post("/signUp", signUp)
router.post("/login", login)
router.get("/profile", jwtAuth, getProfile)
router.get("/profile/:_id", jwtAuth, getProfile)

export default router
