import { Router } from "express";
import { registerUser } from "../controllers/users/userRegister.controller.js";
import { loginUser } from "../controllers/users/userLogin.controllers.js";
import { uploader } from "../middlewares/multer.middlewares.js";
const router = Router();

router.route("/register").post(
  uploader.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);

export default router;
