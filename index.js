import express from "express";
import dbConnection from "./db/conn.js";
import userRoute from "./routes/userRoutes.js";

const app = express();
const port = 720;
dbConnection();
app.use(express.json());
app.use("/api/v1/users", userRoute);
app.get("/", (req, res) => {
  res.send("hello welcome to my personal api server");
});

app.listen(port, () => {
  console.log(`server is listening on port http://localhost:${port}`);
});