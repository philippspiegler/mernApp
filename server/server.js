import express from "express"
import cors from "cors"
import router from "./routes/testRoute.js"
import * as dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

console.log("process.env>>>", process.env)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err))

const app = express()
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(cors())

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Server is running on " + port)
})

app.use("/app", router)
// console.log("router")
