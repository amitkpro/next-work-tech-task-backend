const express = require("express");
const app = express();
const connection = require("./config/config");
const userRouter = require("./src/router/index")
const cors = require("cors")
const PORT = 4040;
connection()
app.use(cors)
app.use(express.json());
app.use("/api",userRouter)

app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
