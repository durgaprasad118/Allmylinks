import { Todo } from "../../models/todo.models.js";

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    if (!todoId) {
      return res.status(400).json({
        success: false,
        message: "No todo found with tht",
      });
    }
    const todo = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({
      success: true,
      message: "todo Dleled succesffulyy",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server errror",
    });
  }
};
