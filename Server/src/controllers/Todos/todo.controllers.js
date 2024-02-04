import { Todo } from "../../models/todo.models.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (title === "") {
      return res.status(400).json({
        success: false,
        message: "title can't be empty",
      });
    }
    const userId = req.user.existingUser._id;
    const newTodo = await Todo.create({
      title,
      description,
      createdBy: userId,
    });
    res.status(200).json({
      success: true,
      message: "todo created successfully",
      todo: newTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server errror",
    });
  }
};
