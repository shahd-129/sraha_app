import { Router } from "express";
import {login, registration } from "../User/user_controllers.js";

export const userRouter = Router()

userRouter.post("/",registration)
userRouter.post("/login",login)

