import { Request, Response } from "express";

export default class UserController {
  constructor() {}

  public async create(req: Request, res: Response) {
    return res.json({ message: "ok" });
  }
}
