const express = require("express");
const app = express();
const connection = require("./config/config");
const userRouter = require("./src/router/index");
const cors = require("cors");
const PORT = 4041;

connection();
app.use(cors()); // Invoke cors as a function
app.use(express.json());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(PORT, () => {
  console.log(`server run on ${PORT}`);
});
