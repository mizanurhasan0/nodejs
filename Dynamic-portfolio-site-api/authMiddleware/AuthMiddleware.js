const { verify } = require("jsonwebtoken");

const ValidationToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not found" });

  try {
    const validToken = verify(accessToken, "softwarebd");
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.json({ error: error });
  }
};
module.exports = { ValidationToken };
