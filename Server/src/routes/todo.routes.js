import { Router } from "express";
const router = Router();
import { createTodo } from "../controllers/Todos/todo.controllers.js";
import { allTodos } from "../controllers/Todos/alltodos.controller.js";
import { updateTodo } from "../controllers/Todos/updatetodo.controllers.js";
import { deleteTodo } from "../controllers/Todos/deletetodo.controllers.js";
router.route("/createTodo").post(createTodo);
router.route("/alltodos").get(allTodos);
router.route("/update/:id").put(updateTodo);
router.route("/delete/:id").delete(deleteTodo);
export default router;