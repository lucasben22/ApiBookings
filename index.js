import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.routes.js";

//Server
const PORT = 3000;
const app = express() 

dotenv.config();

app.listen(PORT, () => {
	console.log(`Server on port ${PORT}`)
	}) 

//MW
app.use(express.json())

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

//Router
app.use("/", router);

