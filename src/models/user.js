const { db } = require("../config/firebase-admin");

class User {
  REF = "users";

  constructor(username, password) {}

  async checkUser(username) {
    const allUsers = await this.getAllUsers();
    if (allUsers && allUsers.length > 0) {
      return allUsers.forEach((user) => {
        if (user.username === username) {
          throw new Error(`${username} is already taken`);
        }
      });
    }
    return;
  }

  async creteNewUser({ username, password }) {
    try {
      await this.checkUser(username);
    } catch (error) {
      throw new Error(error.message);
    }

    return await db
      .collection(this.REF)
      .doc("user-1")
      .create({ username, password })
      .then(() => {
        return;
      });
  }

  async getAllUsers() {
    const list = [];
    try {
      await db
        .collection(this.REF)
        .orderBy("username", "asc")
        .get()
        .then((records) => {
          records.forEach((user) => {
            list.push(user.data());
          });
        });
    } catch (error) {
      console.log(error);
      return list;
    }
  }
}

module.exports = { User };
