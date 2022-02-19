const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

const userRouter = require("./routers/UserRoute");
app.use("/auth", userRouter);

const PersonalProject = require("./routers/PersonalProjectRoute");
app.use("/project", PersonalProject);

const UserExperience = require("./routers/ExperienceRouter");
app.use("/experience", UserExperience);

const UserInfo = require("./routers/UserInfoRouter");
app.use("/userinfo", UserInfo);

const Education = require("./routers/EducationRouter");
app.use("/education", Education);

// const uploadImage = require("./routers/ImageRouter");
// app.use("/image", uploadImage);

const uploadImage = require("./routers/OUserRouter");
app.use("/image", uploadImage);
app.use("/Images", express.static("./images"));

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server Running ...");
  });
});
