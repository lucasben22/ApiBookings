import { Router } from "express";
import { postUser, getUsers } from "../controllers/users.controller";

const userRouter = Router();

userRouter.get("/api", getUsers);
userRouter.post("/api/users", postUser);

export default userRouter;