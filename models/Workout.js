const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        workout_type: {
            type: String,
            trim: true,
            enum: ["Cardio", "Resistance"],
            required: [true, "Workout type is required"]
        },
        exercise_name: {
            type: String,
            trim: true,
            required: "Exercise name is required"
        },
        distance: {
            type: Number,
            required: "Distance is required"
        },
        duration: {
            type: Number,
            required: "Duration is required"
        },
        weight: {
            type: Number,
            required: "Weight is required"
        },
        sets: {
            type: Number,
            required: "Sets are required"
        },
        reps: {
            type: Number,
            required: "Reps are required"
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;