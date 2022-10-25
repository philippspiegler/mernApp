import express from "express"
import { getAllCars, getCarById } from "../controllers/carsController.js"
const router = express.Router()

router.get("/all", getAllCars)
router.get("/:carId", getCarById) // route to get car info by car id
// router.post("/upload", uploadCar)
// router.post("/:updateUser", updateUser) S3E3

export default router
