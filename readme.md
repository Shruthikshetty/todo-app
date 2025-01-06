### Simple Todo application

### example folder structure

todo-app/
├── controllers/
│ ├── userController.mjs
│ ├── todoController.mjs
├── models/
│ ├── User.mjs
│ ├── Todo.mjs
├── routes/
│ ├── userRoutes.mjs
│ ├── todoRoutes.mjs
├── middlewares/
│ ├── authMiddleware.mjs
├── utils/
│ ├── validation.mjs
├── index.mjs
├── package.json

## Tasks

### Create Task
- A user can create a task with the following attributes:
  - **title**: required, maximum length of 50 characters.
  - **description**: optional, maximum length of 200 characters.
  - **status**: defaults to "pending".
  - **dueDate**: must be a future date.

### Read Tasks
    - Can view only their own tasks.

### Update Task
- Users can update their own tasks.

### Validations
- The status must be one of the following: "pending", "in-progress", or "completed".

### Delete Task
- Users can delete their own tasks.
