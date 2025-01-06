import { Todo } from "../models/Todo.mjs";
import { matchedData, validationResult } from "express-validator";

/**
 * used to get the list of todo items
 */
export const getTodos = async (req, res) => {
  // get all the todos
  try {
    const todos = await Todo.find();
    return res.status(200).send(todos);
  } catch (err) {
    return res.status(500).send({ message: err.message ?? "failed" });
  }
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
  const data = matchedData(req);

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
export const updateTodoById = async (req, res) => {
  const { id } = req.params;
  // get the result of the validation done
  const result = validationResult(req);
  // catch any validation errors
  if (!result.isEmpty()) return res.status(400).send({ error: result.array() });
  // get the validated data if no errors
  const data = matchedData(req);

  try {
    // find and update the item
    const todo = await Todo.findByIdAndUpdate(id, data);
    if (!todo) {
      // send err if no todo item for given index
      res.send(404).send({ message: "todo task not found" });
    }
    res.status(200).send(todo);
  } catch (err) {
    // catching err if any caused in the above block
    return res
      .status(500)
      .send({ message: "failed to retreive data", err: err?.message });
  }
};

/**
 * delete a task by its id
 */
export const deleteTodoByID = async (req, res) => {
  // destructure the id
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      res.send(404).send({ message: "todo task not found" });
    }
    res.status(200).send({ message: "deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "failed to delete", err: err?.message });
  }
};
