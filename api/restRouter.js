import express from "express";

import { usersRouter } from "./users";

export const restRouter = express.Router();

// The authorization routes go here Api Routs
restRouter.use("/users", usersRouter);
