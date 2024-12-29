/** congtains all routes related to todo */

import { Router } from "express";
import {
  getTodos,
  createTodo,
  deleteTodoByID,
  updateTodoById,
} from "../controllers/todoController.mjs";

const router = Router();

router.get("/", getTodos); // Get all task
router.post("/", createTodo); //create a new todo task
router.put("/:id", updateTodoById); //update a task
router.delete("/:id", deleteTodoByID); //delete a task by id

export default router;
