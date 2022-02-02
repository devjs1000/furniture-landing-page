import UserAuth from "../models/userAuth.model.js";
import { Router } from "express";


const routes = Router();

routes.route("/log").post( async (req, res) => {
const {username, password}=req.body
console.log(username, password);
// console.log(UserAuth);

const usr = new UserAuth({ username, password });

 const user= await UserAuth.findOne({username, password})
 if(user){
     res.json({msg:'hey you are  registered'})
 }else{
    res.json({msg:'hey you are not registered'})
  
 }
});

export default routes;
