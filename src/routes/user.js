const { userController } = require("../controllers");

const userRoutes = (app) => {
  app.route("/users").post(userController.create);
  return;
};

module.exports = { userRoutes };
