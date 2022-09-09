import express from "express";
import cors from "cors";
import { PORT } from "./config/port.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ allowedHeaders: "*" }));

app.listen(PORT, () => console.log(`running on ${PORT}`));

export default app;
