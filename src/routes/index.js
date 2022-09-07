const { notFound } = require("./notFound");
const { userRoutes } = require("./user");

module.exports = (app) => {
  userRoutes(app);
  notFound(app);
};
