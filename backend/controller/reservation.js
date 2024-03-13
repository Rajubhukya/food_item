import ERRORHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";
export const sendReservation = async(req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;

    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ERRORHandler("please fill all fields", 400));
    }
    try {
        await Reservation.create({ firstName, lastName, email, phone, time, date });
        res.status(200).json({
            success: true,
            message: "reservation sent successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return next(new ERRORHandler(validationErrors.join(" ,"), 400));
        }
        return next(new ERRORHandler(error.message, 500));
    }
};