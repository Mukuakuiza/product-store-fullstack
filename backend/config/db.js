import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    //code 1 means failure and 0 means success
    process.exit(1);
  }
};

export { connectDB as connectDb };
