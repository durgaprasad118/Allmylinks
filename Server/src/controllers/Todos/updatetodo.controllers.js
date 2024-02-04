import { Todo } from "../../models/todo.models.js";

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(400).json({
        success: false,
        message: "No todo found with tht",
      });
    }
    const { title, description } = req.body;
    if (title) {
      todo.title = title;
    }
    if (description) {
      todo.description = description;
    }
    await todo.save();
    res.status(200).json({
      success: true,
      message: "todo Updated successfully",
      data: todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server errror",
    });
  }
};
