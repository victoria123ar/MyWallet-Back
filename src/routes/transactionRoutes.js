import { Router } from "express";
import {
  criarTransacao,
  encontrarTransacao,
  transacoes,
} from "../controllers/transactionsControllers.js";
import { validaçãoAutenticacao } from "../middlewares/authMiddlewares.js";
import { validacaoTransacao } from "../middlewares/transactionMiddlewares.js";

const router = Router();

router.use(validaçãoAutenticacao);
router.post("/transacoes", validacaoTransacao, criarTransacao);
router.get("/transacoes", encontrarTransacao, transacoes);
export default router;