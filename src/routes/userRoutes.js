import { Router } from "express";
import { signIn } from "../controllers/signInControllers.js";
import { signUp } from "../controllers/signUpControllers.js";
import { signInValidacao } from "../middlewares/signInMiddlewares.js";
import { validacaoUsuario } from "../middlewares/userMiddlewares.js"

const router = Router();

router.post("/cadastro", validacaoUsuario, signUp);
router.post("/", signInValidacao, signIn);
export default router;