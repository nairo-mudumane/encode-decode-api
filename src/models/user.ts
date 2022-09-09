import { db } from "../config/firebase-admin.js";
import { API_BASE_URL, CLIENT_BASE_URL } from "../config/global.js";
import { IUser, IUserModel } from "../types/user.js";
import { isValidUserFields } from "../utils/user.js";

export class User {
  private REF = "users";
  private defaultReturn = {} as IUserModel;

  constructor(payload?: IUser) {
    this.checkUser(payload);
  }

  checkUser(user?: IUser) {
    try {
      if (user) {
        return isValidUserFields(user);
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
