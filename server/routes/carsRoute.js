import express from "express"
import { getAllCars, getCarById } from "../controllers/carsController.js"
const router = express.Router()

router.get("/all", getAllCars)
router.get("/:carId", getCarById) // route to get car info by car id

export default router
