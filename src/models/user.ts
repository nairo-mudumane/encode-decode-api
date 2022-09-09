import { db } from "../config/firebase-admin.js";
import { API_BASE_URL, CLIENT_BASE_URL } from "../config/global.js";
import { IUser, IClassUser } from "../types/user.js";
import { isValidUserFields } from "../utils/user.js";

const REF = "users";
export class User {
  constructor(public payload?: IUser) {
    this.checkUser(payload);
  }

  public checkUser(user?: IUser) {
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

  public formatUser(user?: IUser) {
    // const removePassword = (({ password, ...all }) => all)(user);
    // const userUrls = this.formatUrlStr(removePassword.username);
    const userUrls = this.formatUrlStr(user.username);
    const response = { ...userUrls };
    response["created_at"] = new Date().toLocaleString();
    response["updated_at"] = response.created_at;
  }

  public formatUrlStr(username?: string) {
    if (username) {
      const removeAccents = username
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const removeWhiteSpacesAndUpperCase = removeAccents
        .replace(/\s/g, "-")
        .toLowerCase();

      const response = {
        api_url: `${API_BASE_URL}/${removeWhiteSpacesAndUpperCase}`,
        client_url: `${CLIENT_BASE_URL}/${removeWhiteSpacesAndUpperCase}`,
        key: removeWhiteSpacesAndUpperCase,
      };

      return response;
    }
    return null;
  }
}
