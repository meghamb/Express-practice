import mongoose from "mongoose";
import { config } from "../../config/development";

export const connect = (url = config.databaseUrl, opts = {}) => {
    console.log('Mongodb connected');
    return mongoose.connect(url, opts);
}