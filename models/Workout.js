const { Schema } = require("mongoose");

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            refPath: 'onModel'
        }
    ],
    onModel: {
        type: String,
        required: true,
        enum: ['Cardio','Resistance']
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;