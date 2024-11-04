// import { connect } from "../../../../dbConfig/dbConfig";
// import user from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";

// connect();

// export async function POST(request = NextRequest) {
//     try {
//         const reqBody = await request.json();
//         const { first_name, last_name, email, password } = reqBody;
//         console.log(reqBody);

//         const User = await user.findOne({ email });

//         if (User) {
//             return NextResponse.json({ error: "User already exist!" }, { status: 400 });
//         }

//         //password hashing
//         const salt = await bcryptjs.genSalt(10)
//         const hashedPsw = await bcryptjs.hash(password, salt)

//         const newUser = new user({
//             first_name,
//             last_name,
//             email,
//             password: hashedPsw,
//         })

//         const savedUser = await newUser.save()
//         console.log(savedUser);

//         return NextResponse.json({
//             message: "User created succesfully!",
//             success: true,
//             savedUser
//         })


//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ message: "Error processing request" }, { status: 500 });
//     }
// }