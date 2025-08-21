import mongoose from "mongoose";

export const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected: ${connect.connection.host}`);
    }catch (error){
        console.log(`Error: ${error.message}`)
        //code 1 means failure and 0 means success
        process.exit(1)
    }
}