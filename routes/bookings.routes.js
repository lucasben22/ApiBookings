import { Router } from "express";
import { getBookings, postBooking } from "../controllers/bookings.controller.js";

const bookingRouter = Router();

bookingRouter.get('/', getBookings);
bookingRouter.post('/', postBooking);

export default bookingRouter;