import joi from "joi";

export const usuarioSchema = joi.object({
  nome: joi.string().required().min(2),
  email: joi.string().email().required(),
  senha: joi.string().required().min(6),
});
