const { isEmpty } = require("./isEmpty");

const isValidUserFields = (user) => {
  const msg = "can't be null";
  const defaultMsg = "can not post empty user";
  const errors = [];

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

module.exports = {
  isValidUserFields,
};
