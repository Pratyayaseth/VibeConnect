import mongoose from "mongoose";

export const connectDb = async () =>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connecte : ${conn.connection.host}`);
  } catch(error){
    console.log("Error in Connecting MongoDB:",error);
    process.exit(1) // 1 means failure

  }
};