const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { getBooks, addBook } = require("../controllers/bookController");

router.get("/", protect, getBooks);
router.post("/", protect, addBook);

module.exports = router;
