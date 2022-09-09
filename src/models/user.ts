import { db } from "../config/firebase-admin.js";
import { API_BASE_URL, CLIENT_BASE_URL } from "../config/global.js";
import { IUser, IUserModel } from "./types.js";

export class User {
  private REF = "users";
  private defaultReturn = {} as IUserModel;

  constructor(payload?: IUser) {
    // bug: return this.defaultReturn
  }
}
