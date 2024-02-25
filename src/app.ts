import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
	origin: process.env.CORS_ORIGIN
}))

app.use(express.json({ limit: "20kb" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

import chat from "./routes/chat.routes";
import userRouter from "./routes/user.routes";

app.use("/api/v1/chat", chat)
app.use("/api/v1/user", userRouter)

export { app }
