import mongoose from "mongoose";

const orderDetail = mongoose.Schema({
    phone_number: {
        type: Number,
    },
    country: {
        type: String,
        required: [true, "Please provide your country"],
    },
    city: {
        type: String,
        required: [true, "Please provide your city"],
    },
    street: {
        type: String,
        required: [true, "Please provide your street"],
    },
    flat_num: {
        type: Number,
        required: [true, "Please provide your flat number"],
    },
    zip_code: {
        type: String,
        required: [true, "Please provide your zip code"],
    },
}, {
    timeStamps: true
});

const OrderDet = mongoose.models.OrderDet || mongoose.model("OrderDet", orderDetail);

export default OrderDet;