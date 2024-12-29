import mongoose, { Schema } from "mongoose";

/**
 * title is required and has a max length of 50.
 * description is optional but has a max length of 200.
 * status can only be pending, in-progress, or completed.
 * dueDate must be a future date.
 */

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 3,
    },
    description: {
      type: String,
      maxlength: 200,
    },
    dueDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

// compiles into a model
export const Todo = mongoose.model("todo", TodoSchema);
