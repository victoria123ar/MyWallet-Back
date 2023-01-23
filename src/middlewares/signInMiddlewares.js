import bcrypt from "bcrypt";
import db from "../db/db.js";

export async function signInValidacao(req, res, next) {
  const { email, senha } = req.body;

  try {
    const usuario = await db.collection("users").findOne({ email });
    if (!usuario) {
      return res.sendStatus(401);
    }
    const senhaCorreta = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.sendStatus(401);
    }
    res.locals.usuario = usuario;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}