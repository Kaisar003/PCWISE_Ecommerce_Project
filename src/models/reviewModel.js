import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    reviewer: {
        type: String,
        required: [true, "Please provide your name"],
    },
    revRate: {
        type: Number,
        required: [true, "Please provide your last name"],
    },
    revDate: {
        type: Date,
        required: [true, "Please provide your email"],
    },
    revTitle: {
        type: String,
        required: [true, "Please provide your password"],
    },
    comment: {
        type: String,
        required: [true, "Please provide your phone number"],
    },
}, {
    timeStamps: true
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;