const express = require("express");
const app = express();
const connection = require("./config/config");
const userRouter = require("./src/router/index")
const PORT = 4040;
connection()

app.use(express.json());
app.use("/api",userRouter)

app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
