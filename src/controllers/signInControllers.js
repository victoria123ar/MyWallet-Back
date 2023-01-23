import db from "../db/db.js";
import { v4 as uuidV4 } from "uuid";

export async function signIn(req, res) {
  const usuario = res.locals.usuario;
  
  const token = uuidV4();

  try {
    await db.collection("sessions").insertOne({ token, usuarioId: usuario._id });
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}