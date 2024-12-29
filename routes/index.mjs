/** this file contains all the routes grouped together */
import { Router } from "express";
import todoRoute from "./todoRoutes.mjs";

const router = Router();

//  all the routes will go here
router.use("/api/todo", todoRoute);

export default router;
