import { Router } from "express";
import { createMessage, deleteMessage, getmessage } from "./message_controllers.js";
import { auth } from "../User/user.weddelwar.js";

export const messageRouter = Router();

messageRouter
  .route("/")
  .post(auth(), createMessage)
  .delete(auth(), deleteMessage)
  .get(auth(), getmessage)
