const express = require("express");
const router = express.Router();
const path = require("path");

// GET homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})

// GET exercise
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
})

// GET stats
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
})

module.exports = router;