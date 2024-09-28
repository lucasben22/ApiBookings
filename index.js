import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { Router } from "express";
import { postUser, getUsers } from "./controllers/users.controller.js";

//Server
const PORT = 3000;
const app = express() 

dotenv.config();

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`)
	}) 

//Router
const userRouter = Router();
userRouter.get("/api", getUsers);
userRouter.post("/api/users", postUser);

//DB
//MongoDB Atlas
// mongoose.connect(process.env.MONGO_URL)
//     .then( async () => {
//         console.log('dB conectada')
//     })
//     .catch(() => console.log('Error en conexion a dB'))

//MongoDB Compass
const mongoDBUrl = 'mongodb://127.0.0.1:27017/TEST'
mongoose.connect(mongoDBUrl)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error de conexión:', error));

//MW
app.use(express.json())
app.use(userRouter);
