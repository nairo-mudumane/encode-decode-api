import { Express } from "express";
import notFund from "./notFound.js";
import userRoutes from "./user.js";

export default function (app: Express) {
  userRoutes(app);
  notFund(app);
}
