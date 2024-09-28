import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {
    constructor() {
        this.dbUrl = process.env.DB_ENV === 'atlas' 
            ? process.env.MONGO_ATLAS_URL 
            : process.env.MONGO_LOCAL_URL;
    }

    async connect() {
        try {
            await mongoose.connect(this.dbUrl);
            console.log(`Conectado a MongoDB en: ${this.dbUrl}`);
        } catch (error) {
            console.error('Error de conexión:', error);
        }
    }

    disconnect() {
        return mongoose.disconnect();
    }
}

const dbInstance = new Database();
export default dbInstance;