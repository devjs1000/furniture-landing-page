import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cors from "cors";
import { config } from "dotenv";
import user from "./routes/team.js";
import userAuth from "./routes/userAuth.js";
import cloudinary from "./utils/cloudinary.js";

config();
const app = express();
const urlencodedParser=bodyParser.urlencoded({extended:false})
app.use(urlencodedParser)
const port = process.env.PORT || 8000;
const uri = process.env.ATLAS_URI;
console.log(uri);
console.log(port);

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongo db is running");
});

app.get("/", (req, res) => {
  res.send(
    '<h1 style="display:flex;justify-content:center;align-items:center; height:90vh; font-size:6rem;"> hello <span style="color:lime"> express </span> </h1>'
  );
});

//photos get
app.get("/photo", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:users")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => {
    return file.public_id;
  });
  res.send(publicIds);
});

//photo upload 
app.post("/photo/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      resource_type: "image",
      public_id: "users/imgs",
      overwrite: true,
    });
    res.json({ msg: "uploaded success!" });
  } catch (err) {
    console.log("48" + err);
    res.status(500).json({ err: "something is  wrong" });
  }
});

app.use("/users", user);
app.use('/login', userAuth)
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
