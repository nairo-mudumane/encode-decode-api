import { IUser } from "../types/index.js";
import { isEmpty } from "./isEmpty.js";

const isValidUserFields = (user: IUser) => {
  const msg = "can't be null";
  const defaultMsg = "can not post empty user";
  const errors: string[] = [];

  if (user) {
    if (isEmpty(user.username)) {
      errors.push(`username ${msg}`);
    }

    if (isEmpty(user.password)) {
      errors.push(`password ${msg}`);
    }

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
  } else {
    throw new Error(defaultMsg);
  }

  return true;
};
