const { sign } = require("jsonwebtoken");

const createAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

//have different versions of refresh tokens
const createRefreshToken = (userId) => {
  return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

const sendAccessToken = (req, res, accesstoken, user, role ) => {
  res.json({
    accesstoken,
    user,
    role
  });
};

const sendRefreshToken = (res, refreshtoken) => {
  res.cookie("refreshtoken", refreshtoken, {
    //set cookie to httpOnly to ensure we can't access it from the client or modify it with javascript
    httpOnly: true,
    //set path so that the cookie isn't sent with each request but only when we're in the refresh_token endpoint
    path: "/auth/refresh_token",
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
};
