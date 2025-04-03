import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { errorMiddleware } from "./middlewares/error.js";
import router from "./route/auth.js";

const app = express();
dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;

// ✅ Proper CORS Configuration
const corsOptions = {
  origin: "http://localhost:5173", // Your frontend
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // Allow cookies
};
app.use(cors(corsOptions));

// ✅ Security: Relaxed in Development Mode
app.use(
  helmet({
    contentSecurityPolicy: envMode !== "DEVELOPMENT",
    crossOriginEmbedderPolicy: envMode !== "DEVELOPMENT",
  })
);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Static Files (should be before route handlers)
app.use(express.static("public"));

// ✅ API Routes
app.use(router);

app.get("/dashboard", (req, res) => {
  res.send("Welcome! You are a verified user.");
});

// ✅ Handle 404 Errors
app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

// ✅ Error Middleware
app.use(errorMiddleware);

// ✅ Server Listener
app.listen(port, () => {
  console.log(
    `Server is running on Port: ${port} in ${envMode} Mode.\n ➜  Local:   http://localhost:${port}/`
  );
});
