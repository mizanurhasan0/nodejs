const express = require("express");
const router = express.Router();
const { UserInfo } = require("../models");

router.post("/", async (req, res) => {
  const userId = 1;
  const existUserInfo = await UserInfo.findAll({ where: { UserId: userId } });

  if (!existUserInfo) {
    const userinfo = req.body;

    console.log(res.body);

    userinfo.UserId = 1;
    await UserInfo.create({
      backend: req.body.backend,
      frontend: req.body.frontend,
      database: req.body.database,
      scm: req.body.scm,
      UserId: userId,
    });
    res.json(userinfo);
  } else {
    if (req.body.skill === "skill") {
      await UserInfo.update(
        {
          backend: req.body.backend,
          frontend: req.body.frontend,
          database: req.body.database,
          scm: req.body.scm,
        },
        { where: { UserId: userId } }
      );
    } else {
      await UserInfo.update(
        {
          summary: req.body.summary,
          father: req.body.father,
          mother: req.body.mother,
          national: req.body.nationality,
          pAddress: req.body.address,
          dob: req.body.birth,
          blood: req.body.blood,
          religion: req.body.religion,
          gender: req.body.gender,
        },
        { where: { UserId: userId } }
      );
      res.json("User Info");
    }

    // res.json(req.body);
  }
});

router.get("/", async (req, res) => {
  const usrinfo = await UserInfo.findAll({ where: { UserId: 1 } });
  res.json(usrinfo);
});
router.put("/update", async (req, res) => {
  const userid = 1;
  const userinfo = req.body;
  await UserInfo.update({ userinfo }, { where: { UserId: userid } });
});
module.exports = router;
