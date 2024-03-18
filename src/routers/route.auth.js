import { Router } from "express";
import { generateToken } from "../controllers/controller.user.js";

const authRouter = Router();

authRouter.post("/user/generateToken", generateToken);

export default authRouter;
