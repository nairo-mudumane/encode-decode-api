import express from "express";
import cors from "cors";
import AppRoutes from "./routes/index.js";
import { PORT } from "./config/global.js";

const app = express();

app.use(cors({ allowedHeaders: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

AppRoutes(app);

app.listen(PORT, () => console.log(`running on ${PORT}`));
