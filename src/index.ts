import express from "express";
import cors from "cors";

const app = express();
const PORT = 3322;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ allowedHeaders: "*" }));

app.listen(PORT, () => console.log(`running on ${PORT}`));

export default app;
