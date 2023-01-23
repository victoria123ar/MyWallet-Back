import { usuarioSchema } from "../validation/userValidation.js";

export function validacaoUsuario(req, res, next) {
  const usuario = req.body;

  const { error } = usuarioSchema.validate(usuario, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.usuario = usuario;

  next();
}