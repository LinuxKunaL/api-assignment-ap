import express from "express";
import cors from "cors";
import authRouter from "./routers/route.auth.js";
import countriesRouter from "./routers/route.countries.js";

import { config } from "./config.js";

const app = new express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(countriesRouter);

app.listen(config.server.port, () => console.log("server is running"));
