import express from "express";
import cors from "cors";
import router from "./Routes/testRoute.js";
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});

app.use("/app", router);
// console.log("router");
