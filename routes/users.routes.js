import { Router } from "express";
import { postUser, getUsers } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", postUser);

export default userRouter;