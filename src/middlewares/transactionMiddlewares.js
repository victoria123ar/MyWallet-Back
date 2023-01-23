import dayjs from "dayjs";
import { transacoesSchema } from "../validation/transactionValidation.js";

export function validacaoTransacao(req, res, next) {
  const { valor, descricao, tipo } = req.body;
  const usuario = res.locals.usuario;

  const transacao = {
    valor,
    descricao,
    tipo,
    usuario: usuario._id,
    data: dayjs().format("DD/MM/YYYY"),
  };

  const { error } = transacoesSchema.validate(transacao, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.transacao = transacao;

  next();
}