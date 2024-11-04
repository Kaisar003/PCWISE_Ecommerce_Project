import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";
import OrderDet from "@/models/orderDetailModel";

export async function POST(req) {
    try {
        await connectDB();
        const {
            country,
            city,
            street,
            flatNum,
            zipCode } = await req.json();

        await OrderDet.create({ country: country, city: city, street: street, flat_num: flatNum, zip_code: zipCode })
        return NextResponse.json({ message: "Succesfully submited the order details!" }, { status: 201 })
    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({ message: "Error while submiting the order detail" }, { status: 500 });
    }
}