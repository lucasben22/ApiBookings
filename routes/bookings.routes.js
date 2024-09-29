import { Router } from "express";
import { postBooking } from "../controllers/bookings.controller.js";

const bookingRouter = Router();
bookingRouter.post('/', postBooking);

export default bookingRouter;