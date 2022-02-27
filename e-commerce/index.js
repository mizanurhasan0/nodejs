const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

const db = require("./models");

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("server PORT 3001 Running....");
  });
});
