const express = require("express");
const app = express();
const PORT = 3322;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ allowedHeaders: "*" }));

require("./routes/index")(app);

app.listen(PORT, () => console.log(`running on ${PORT}`));
