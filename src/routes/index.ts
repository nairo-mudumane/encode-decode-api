import { Express } from "express";

export default function (app: Express) {
  app.get("/", (req, res) => {
    return res.send("ok");
  });
}
