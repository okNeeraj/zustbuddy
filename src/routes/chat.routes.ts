import { Router } from "express";
import { chat } from "../app/controllers/chat.controller";

const router = Router();

router.route("/").get(chat)

export default router;
