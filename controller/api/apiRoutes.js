const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Workout = require("../../models/Workout");

// CREATE workout
router.post("/workouts", async ({ body }, res) => {
    try {
        await Workout.create(body)
        .then(workoutData => {
            console.log(workoutData);
            res.json(workoutData);
        })
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// READ workouts
router.get("/workouts", async (req, res) => {
    try {
        const workoutData = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration"}
                }
            }
        ])
        res.json(workoutData);
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
});

// UPDATE workout
router.put("/workouts/:id", ({body, params }, res) => {
    try {
        Workout.findByIdAndUpdate(params.id, { $push: { exercises: body }})
        .then((workoutData => {
            res.json(workoutData)
        }))
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
});

//Stats page routes
router.get("/workouts/range", async (req, res) => {
    try {
        const workoutData = await Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration"}
                }
            }
        ])
        .sort({_id: 1})
        .limit(7)
        res.json(workoutData)
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
});

module.exports = router;