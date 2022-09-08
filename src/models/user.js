const { db } = require("../config/firebase-admin");
const { API_BASE_URL, CLIENT_BASE_URL } = require("../config/global");
const { isValidUserFields } = require("../utils");

class User {
  REF = "users";
  defaultReturn = {};

  constructor(payload) {
    try {
      this.checkUser(payload);
      const user = this.formatUser(payload);

      this.defaultReturn = {
        ...this.defaultReturn,
        ...user,
      };
    } catch (error) {
      this.defaultReturn = {
        ...this.defaultReturn,
        error: true,
        message: error.message,
      };
    }

    return this.defaultReturn;
  }

  checkUser(user) {
    try {
      return isValidUserFields(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  formatUser(user) {
    // const removePassword = (({ password, ...all }) => all)(user);
    // const userUrls = this.formatUrlStr(removePassword.username);
    const userUrls = this.formatUrlStr(user.username);
    const response = { ...userUrls };
    response["created_at"] = new Date().toLocaleString();
    response["updated_at"] = response.created_at;
    return response;
  }

  formatUrlStr(username) {
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

  async creteNewUser(user) {
    return await db
      .collection(this.REF)
      .doc("user-1")
      .create({ username, password })
      .then(() => {
        return;
      });
  }

  // async getAllUsers() {
  //   const list = [];
  //   try {
  //     await db
  //       .collection(this.REF)
  //       .orderBy("username", "asc")
  //       .get()
  //       .then((records) => {
  //         records.forEach((user) => {
  //           list.push(user.data());
  //         });
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     return list;
  //   }
  // }
}

module.exports = { User };
