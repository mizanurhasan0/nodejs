const { verify } = require("jsonwebtoken");

const ValidateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not found" });

  try {
    const validToken = verify(accessToken, "hasan");
    req.User = validToken;

    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.json({ error: error });
  }
};
module.exports = { ValidateToken };
