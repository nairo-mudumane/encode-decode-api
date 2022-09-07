const notFound = (app) => {
  app.all("/", (req, res) => {
    return res.status(404).json({ error: true, message: "not found" });
  });
};

module.exports = { notFound };
