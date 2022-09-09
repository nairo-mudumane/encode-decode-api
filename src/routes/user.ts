import { Express } from "express";
import UserController from "../controllers/user.js";

export default function userRoutes(app: Express) {
  const controller = new UserController();

  app.route("/users").post(controller.create);
}
