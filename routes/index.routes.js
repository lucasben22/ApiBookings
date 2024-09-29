import { Router } from "express";
import userRouter from "./users.routes.js";
import bookingRouter from "./bookings.routes.js";

const router = Router();

router.use('/api/users', userRouter);
router.use('/api/bookings', bookingRouter);

export default router;