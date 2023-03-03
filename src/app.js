import express from "express";
import morgan from "morgan";

//Routes
import indexRoutes from "./routes/index.js";

const app = express();

//Settings
app.set("port", 3000);
app.use(morgan("dev"));

//Routes
app.use("/generatePasswords", indexRoutes);

export default app;
