const express = require("express");
const app = express();
const PORT = 3322;
const cors = require("cors");

app.use(cors({ allowedHeaders: "*" }));

app.listen(PORT, () => console.log(`running on ${PORT}`));
