import { Express } from "express";
import notFund from "./notFound.js";

export default function (app: Express) {
  notFund(app);
}
