const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(403).json({ error: "Access Denied, No Token Provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "You do not have permission" });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRole };
