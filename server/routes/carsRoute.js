import express from "express"
import { getAllCars } from "../controllers/carsController.js"
const router = express.Router()

router.get("/all", getAllCars)

export default router
