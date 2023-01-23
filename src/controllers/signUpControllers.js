import db from "../db/db.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
  const usuario = res.locals.usuario;
  const senhaUsuario = bcrypt.hashSync(usuario.senha, 10);

  try {
    await db.collection("users").insertOne({ ...usuario, senha: senhaUsuario });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}