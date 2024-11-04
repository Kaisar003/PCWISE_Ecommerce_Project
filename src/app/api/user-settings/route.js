import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    try {
        await connectDB();
        const { userId } = await req.json();

        if (!userId) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }

        // Attempt to delete the user
        const result = await User.findByIdAndDelete(userId);

        if (result) {
            return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}