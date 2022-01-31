import { Router } from "express";
import User from "../models/user.model.js";

const routes = Router();
routes.route("/data").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => err.status(400));
});

routes.route("/add").post((req, res) => {
  const name = String(req.body.name);
  const profilePicture = String(req.body.profilePicture);
  const quote = String(req.body.quote);
  const usr = new User({ name, profilePicture, quote });
  usr
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(500));
});

export default routes;
