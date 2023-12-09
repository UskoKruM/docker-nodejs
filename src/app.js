import express from "express";
import morgan from "morgan";

//Routes
import indexRoutes from "./routes/index.js";

const app = express();

//Settings
app.set("port", 3000);

//Middlewares
app.use(morgan("dev"));

//Setting Routes
const ignoreFaviconMiddleware = (request, response, next) => {
    if (request.originalUrl.includes("favicon.ico")) {
        response.status(204).end();
    }
    next();
};

app.use(ignoreFaviconMiddleware);
app.use("/generatePasswords", indexRoutes);

export default app;
