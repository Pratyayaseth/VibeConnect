import {StreamChat} from "stream-chat"
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY
const apiSecret = process.env.STREAM_API_SECRET

if(!apiKey || !apiSecret){
  console.error("Stream API key or secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser = async (userData) =>{
  try {
    await streamClient.upsertUsers([userData]);// create new user or update one
   
    return userData
  } catch (error) {
    console.log(userData.id);
    console.log("Error upserting stream user:",error);
    
  }
};

export const generateStreamToken = (userId)=>{
  try {
    // ensure user id is string

    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.log("Error generating stream token");
    
  }
}