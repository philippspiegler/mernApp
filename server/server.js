import express from "express"
import cors from "cors"
import router from "./routes/carsRoute.js"
import mongoose from "mongoose"
import carsRoute from "./routes/carsRoute.js"
import historyRoute from "./routes/historyRoute.js"
import usersRoute from "./routes/usersRoute.js"
import commentsRoute from "./routes/commentsRoute.js"
import passportConfig from "./config/passportConfig.js"
import passport from "passport"
import { cloudinaryConfig } from "./config/cloudinaryConfig.js"
import * as dotenv from "dotenv"
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
  cloudinaryConfig()

  app.use(passport.initialize())
  passportConfig(passport)
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
  // app.use("/users", router)
  app.use("/cars", carsRoute)
  app.use("/history", historyRoute)
  app.use("/users", usersRoute)
  app.use("/comments", commentsRoute)
}

;(async function controller() {
  await mongoDBConnection()
  addMiddlewares()
  loadRoutes()
  startServer()
})()
