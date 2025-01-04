import jwt from "jsonwebtoken";

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    // Extract token from the Authorization header
    const authHeader = req.headers.authorization;

    // Check if the Authorization header is not present or doesn't start with "Bearer"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again!",
      });
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(" ")[1];

    // Decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID to the request body (or you can use req.user)
    req.body.userId = decodedToken.id;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.log(error);
    // Send 401 Unauthorized if any error occurs in the token verification process
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

export default authUser;
