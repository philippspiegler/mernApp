import express from "express"
const router = express.Router()

// path (endpoint, URI) and callback function, then .send() to front end
//where url is fetched with this here endpoint

router.get("/cars", (req, res) => {
  res.send({
    cars: [
      "Atlantic",
      "Trabant",
      "Rendevouz",
      "Lagonda",
      "Low Res Car",
      "G63 6x6",
      "Unimog",
      "Crossblade",
    ],
  })
})

export default router
