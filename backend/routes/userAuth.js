import UserAuth from "../models/userAuth.model.js";
import { Router } from "express";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

config();
const routes = Router();

routes.route("/log").post(async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // console.log(UserAuth);

  // const crypticPassword=await bcrypt.hash(password, 10)
  // const usr = new UserAuth({ username, password:crypticPassword });
  // usr.save().then(() => res.json("user added"))
  // .catch((err) => res.status(500));
  // console.log(crypticPassword);

  const user = await UserAuth.findOne({ username }).then((dbUser) => {
    if (!dbUser) {
      return res.json({ msg: "invalid username and password" });
    }
    bcrypt.compare(password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        console.log("you are admin");
        const payload = {
          id: dbUser._id,
          username: dbUser.username,
        };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 86400 },
          (err, token) => {
            if (err) return res.json({ message: err });
            return res.json({ msg: "success", token });
          }
        );
      } else {
        return res.json({
          msg: "invalid username or password",
        });
      }
    });
  });
});

function verifyJWT(req,res,next){

    const token=req.headers['x-access-token']?.split(' ')[1]
    if(token){
        jwt.verify(token,process.env.JWT_KEY, (err, decoded)=>{
            if(err){
                return res.json({
                    isLoggedIn:false,
                    msg:'failed to authenticate'
                })
            }
            req.body={}
            req.body.id=decoded.id
            req.body.username=decoded.username
        })
    }else{
        res.json({msg:'incorrect token given', isLoggedIn:false})
    }
}

routes.get('/user',verifyJWT, ()=>{
    res.json({
        isLoggedIn:true,
        username:req.body.username
    })
})
export default routes;
