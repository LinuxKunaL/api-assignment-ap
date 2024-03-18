import { Router } from "express";
import { country, countries } from "../controllers/controller.country.js";
import { verifyUser } from "../controllers/controller.user.js";

const countriesRouter = Router();

// That verifyUser is Middleware function that can filter all request for authentication  
countriesRouter.get("/country", verifyUser, country);
countriesRouter.get("/countries", verifyUser, countries);

export default countriesRouter;
