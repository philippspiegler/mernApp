import express from "express"
import {
  getAllCars,
  getCarById,
  uploadCarPicture,
} from "../controllers/carsController.js"
import { multerUploads } from "../middlewares/multer.js"

const router = express.Router()

router.get("/all", getAllCars)
router.get("/id/:carId", getCarById) // route to get car info by car id
router.post(
  "/imageUpload/:carId",
  multerUploads.single("image"),
  uploadCarPicture
)

export default router
