import joi from "joi";

export const transacoesSchema = joi.object({
  valor: joi.number().required(),
  descricao: joi.string().required().min(3),
  tipo: joi.string().required().valid("entrada", "saida"),
  usuario: joi.object().required(),
  data: joi.string().required(),
});