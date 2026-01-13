// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const errorHandler = require("./middleware/errorMiddleware");

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/books", require("./routes/bookRoutes"));

// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();

// CORS configuration
app.use(cors({
  origin: [
    "https://your-frontend.vercel.app", // deployed frontend URL
    "http://localhost:5173"             // local dev
  ],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

// Body parser
app.use(express.json());

// Root route for testing
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// API routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
