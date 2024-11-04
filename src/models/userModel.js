import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     first_name: {
//         type: String,
//         required: [true, "Please provide your name"],
//         unique: true,
//     },
//     last_name: {
//         type: String,
//         required: [true, "Please provide your last name"],
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide your email"],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide your password"],
//         unique: true,
//     },
//     isVerified: {
//         type: Boolean,
//         default: false,
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date,
// })

// const user = mongoose.models.users || mongoose.model("users", userSchema);

// export default user;

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please provide your name"],
    },
    last_name: {
        type: String,
        required: [true, "Please provide your last name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        unique: true,
    },
    phone_number: {
        type: Number,
        unique: true,
    }
}, {
    timeStamps: true
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;