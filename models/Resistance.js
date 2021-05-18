const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema ({
    exercise_type: {
        type: String,
        required: "Exercise type is required"
    },
    exercise_name: {
        type: String,
        trim: true,
        required: "Exercise name is required"
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
    },
    duration: {
        type: Number,
        required: "Duration is required"
    },
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;