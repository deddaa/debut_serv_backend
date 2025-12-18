import dotenv from "dotenv";
import connectDB from "./config/dataBase.js";

dotenv.config({
    path: './.env'
});

const startServer = async() =>{
    try {
        await connectDB
    } catch (error) {
        
    }
}