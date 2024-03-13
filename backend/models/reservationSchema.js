import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLenght: [3, "first name must be at least 3 characters"],
        maxLenght: [20, "first name must be at most 20 characters"],

    },
    lastName: {
        type: String,
        required: true,
        minLenght: [3, "last name must be at least 3 characters"],
        maxLenght: [20, "last name must be at most 20 characters"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "please enter a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLenght: [11, "phone number must be at least 11 characters"],
        maxLenght: [11, "phone number must be at most 11 characters"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);