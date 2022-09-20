import express from "express"
const router = express.Router()

router.get("/cars", (req, res) => {
  res.send({
    cars: [
      "Atlantic",
      "Trabant",
      "Rendevouz",
      "Lagonda",
      "Low Res Car",
      "G63 6x6",
    ],
  })
})

export default router
