import { connect } from "@/dbConfig/dbConfig";
import user from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try {
        connect();
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const User = await user.findOne({ email });

        if (!User) {
            return NextResponse.json({ error: "User doesn't exist!" }, { status: 400 });
        }

        const validPsw = await bcryptjs.compare(password, User.password);
        if (!validPsw) {
            return NextResponse.json({ error: "Invalid password!" }, { status: 400 });
        }

        const tokenData = {
            id: User._id,
            email: User.email,
            password: User.password,
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "7d" });

        const response = NextResponse.json({
            message: "User logged in succesfully!",
            success: true,
        })
        response.cookies.set("token", token, { httpOnly: true })
        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error processing request" }, { status: 500 });
    }
}