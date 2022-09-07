const userRoutes = (app) => {
  app.route("/users").post((req, res) => {
    return res.send("post route");
  });
  return;
};

module.exports = { userRoutes };
