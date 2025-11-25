import express from "express";
import helmet from "helmet";
import { corsConfig } from "./config/cors.js";
import { requestLogger } from "./config/logger.js";
import { notFoundHandler } from "./api/middlewares/notFound.js";
import { errorHandler } from "./api/middlewares/errorMiddleware.js";

// Future: import routes here
// import userRoutes from "./api/routes/user.routes.js";

const app = express();

// Security middleware
app.use(helmet());

// Core middlewares
app.use(corsConfig);
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes placeholder
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// Not Found + Error handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
