const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);
const productRoutes = require("./routes/productsRoute");
app.use("/product", productRoutes);
const cartRoutes = require("./routes/cartRoute");
app.use("/cart", cartRoutes);

app.use("/images", express.static("./images"));
db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("server PORT 3001 Running....");
  });
});
