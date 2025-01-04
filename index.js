const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();
const cors = require("cors");
// const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.options("*", cors());

// Middleware
app.use(express.json());

// app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Product Routes
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
