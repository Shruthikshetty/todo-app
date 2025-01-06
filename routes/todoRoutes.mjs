/** congtains all routes related to todo */

import { Router } from "express";
import {
  getTodos,
  createTodo,
  deleteTodoByID,
  updateTodoById,
} from "../controllers/todoController.mjs";
import { checkSchema, body } from "express-validator";
import {
  createUserValidationSchema,
  validateId,
} from "../utils/userValidationSchemas.mjs";

const router = Router();

router.get("/", getTodos); // Get all task
router.post("/", checkSchema(createUserValidationSchema), createTodo); //create a new todo task
router.put(
  "/:id",
  [validateId],
  checkSchema(createUserValidationSchema),
  updateTodoById
); //update a task
router.delete("/:id", deleteTodoByID); //delete a task by id

export default router;
