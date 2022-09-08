const { User } = require("../models/user");

exports.create = async (req, res) => {
  const payload = req.body;

  if (!payload.username && !payload.password) {
    return res
      .status(400)
      .json({ error: true, message: "username or password must not be null" });
  }

  const userModel = new User(payload);

  return res.json({ userModel });

  // await userModel
  //   .creteNewUser({ ...payload })
  //   .then(() => {
  //     return res.status(201).jsoN({ error: false, message: "created" });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     return (
  //       res
  //         // .status(error.status)
  //         .json({ error: true, message: error.message })
  //     );
  //   });
};
