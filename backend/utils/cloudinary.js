import { config } from "dotenv";
import {v2} from 'cloudinary'
config()
v2.config(
    {
        cloud_name:process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET,
        secure: true
    }
)

export default v2