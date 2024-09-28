import { Router } from "express";
import { getUsers, getUserById, postUser } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', postUser);

export default userRouter;

