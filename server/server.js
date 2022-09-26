import express from "express"
import cors from "cors"
import router from "./routes/carsRoute.js"
import * as dotenv from "dotenv"
import mongoose from "mongoose"
import carsRoute from "./routes/carsRoute.js"
import historyRoute from "./routes/historyRoute.js"
dotenv.config()
const app = express()
const port = process.env.PORT || 5000

const addMiddlewares = () => {
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: true,
    })
  )

  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
  }
  app.use(cors(corsOptions))
}
const mongoDBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("you connected to mongoDB, on port..." + port)
  } catch (error) {
    console.log("error connecting to MongoDB..." + error)
  }
}

const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on ${port} port`)
  })
}

const loadRoutes = () => {
  app.use("/users", router)
  app.use("/api/cars", carsRoute)
  app.use("/api/history", historyRoute)
}

;(async function controller() {
  await mongoDBConnection()
  addMiddlewares()
  loadRoutes()
  startServer()
})()

// app.use(express.json())
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// )
// app.use(cors())

// const port = process.env.PORT || 5000
// app.listen(port, () => {
//   console.log("Server is running on " + port)
// })

// app.use("/app", router)
// // console.log("router")
// console.log("process.env>>>", process.env)
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connection to Mongo DB established"))
//   .catch((err) => console.log(err))

// const loadRoutes = () => {
//   app.use("/car", router)
//   app.use("/api/cars", carsRoute)
// }

// ;(async function controller() {
//   loadRoutes()
// })()
