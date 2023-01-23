import db from "../db/db.js";

export async function validaçãoAutenticacao(req, res, next) {
  const autorizacao  = req.headers.authorization;
  const token = autorizacao.replace("Bearer ", "");
  
  if (!token) {
    
    return res.sendStatus(401);
  }

  try {
    const sessao = await db.collection("sessions").findOne({ token });
    if (!sessao) {
      
      return res.sendStatus(401);
    }
    const usuario = await db.collection("users").findOne({ _id: sessao?.usuarioId });
    if (!usuario) {
      return res.sendStatus(401);
    }
    res.locals.usuario = usuario;
    
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
