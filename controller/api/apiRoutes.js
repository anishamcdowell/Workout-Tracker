const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Workout = require("../../models/Workout");

// CREATE workout
router.post("/api/workouts", async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.sendStatus(400).json(err);
    }
});

// READ workouts
router.get("/api/workouts", (req, res) => {
    try {
        Workout.find({})
        .then(workoutData => {
            console.log(workoutData);
            res.json(workoutData);
        })
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
});

// UPDATE workout
// router.put("/api/workouts", (req, res) => {
//     try {

//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500).json(err);
//     }
// });

module.exports = router;