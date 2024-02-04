import { Todo } from "../../models/todo.models.js";
export const allTodos = async (req, res) => {
  try {
    const userId = req.user.existingUser._id;
    const todos = await Todo.find({ createdBy: userId });
    res.status(200).json({
      success: true,
      message: "all todos list",
      todos: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server errror",
    });
  }
};
