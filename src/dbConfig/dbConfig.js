import mongoose from "mongoose";

// export async function connect(params) {
//     try {
//         mongoose.connect(process.env.MONGO_URI);
//         const connection = mongoose.connection;

//         connection.on('connected', () => {
//             console.log("Succesfully connected to DB!")
//         })

//         connection.on('error', (err) => {
//             console.log("Something went wrong while connecting to the DB. Please make sure MongoDB is running." + err);
//             process.exit();
//         })
//     } catch (error) {
//         console.log('Something went wrong while connecting to DB!');
//         console.log(error);
//     }
// }

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Succesfully connected to DB!")
    } catch (error) {
        console.log("Something went wrong while connecting to MongoDB!", error);
    }
}