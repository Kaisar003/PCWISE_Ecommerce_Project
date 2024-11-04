import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
    try {
        connectDB()
        // Find the user in the database based on the user ID
        const user = await User.findOne({ id: request.userID });
        return NextResponse.json({ user })
    } catch (error) {
        console.log("Error while fetching data!");
        return NextResponse.json({ error: error.message }, { status: 400 })

    }
}

export async function PUT(req) {
    try {
        const ID = await User.findOne({ id: req.id });
        const users = await req.json();

        await connectDB();

        const updatedUser = await User.updateMany(
            ID,
            { $set: users },
        );

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 400 });
        }

        return NextResponse.json({ message: "User updated succesfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}