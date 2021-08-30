const jwt = require("jsonwebtoken");

const { verify } = require("jsonwebtoken");

const isAuth = (req) => {
  const authorization = req.headers["authorization"];
  if (!authorization) throw new Error("You need to login");
  //the authorization we look like this: 'Bearer $vjkefasgfwekqgei4y8i21uednh'
  const token = authorization.split(" ")[1];
  //check the user and ensure the token is valid
  const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET);
  return userId;
};

const authPage = (permission) => {
  return (req,res, next) => {
    const userRole = req.body.role
    if (permission.includes(userRole)) {
      next()
    } else {
      return res.status(401).json("You don't have permission!")
    }
  }
}

module.exports = {
  isAuth,
  authPage
};
