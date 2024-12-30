import { Todo } from "../models/Todo.mjs";
import { matchedData, validationResult } from "express-validator";

/**
 * used to get the list of todo items
 */
export const getTodos = (req, res) => {
  res.send("get api to be implemented ");
};

/**
 * create a new task based on the used request
 */
export const createTodo = async (req, res) => {
  // get the result of the validation done
  const result = validationResult(req);
  // check of there are no errors
  if (!result.isEmpty()) return res.status(400).send({ error: result.array() });

  // get the validated data if no errors 
  const data = matchedData(req)

  // create a new todo item 
  const newTask = new Todo(data);

  try {
    // save to database
    const savedTask = await newTask.save();
    res.status(201).send(savedTask);
  } catch (err) {
    return res
      .status(400)
      .send({ message: "failed to store in database", err: err?.message });
  }
};

/**
 * update a task by its id
 */
export const updateTodoById = (req, res) => {
  res.send("put api to be implemented ");
};

/**
 * delete a task by its id
 */
export const deleteTodoByID = (req, res) => {
  res.send("delete api to be implemented ");
};
