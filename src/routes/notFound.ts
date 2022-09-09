import { Express } from "express";

export default function notFund(app: Express) {
  return app.all("*", (req, res) => {
    return res.status(404).json({ error: true, message: "not found" });
  });
}
