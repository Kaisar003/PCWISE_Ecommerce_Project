import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        await connectDB();
        const { first_name, last_name, email, password } = await req.json();
        const exists = await User.findOne({ $or: [{ email }, { password }] });
        if (exists) {
            return NextResponse.json({ message: "Username or email already exists." }, { status: 500 })
        };
        const hashedPsw = await bcrypt.hash(password, 10);
        await User.create({ first_name, last_name, email, password: hashedPsw });
        return NextResponse.json({ message: "Succesfully registered!" }, { status: 201 })
    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({ message: "Error while registering" }, { status: 500 });
    }
}