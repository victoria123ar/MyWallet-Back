import db from "../db/db.js";

export async function criarTransacao(req, res) {
  const transacao = res.locals.transacao;

  try {
    await db.collection("transactions").insertOne(transacao);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function encontrarTransacao(req, res) {
  const usuario = res.locals.usuario;

  try {
    const transacoes = await db.collection("transactions")
      .find({ usuario: usuario._id })
      .toArray();

    delete usuario.senha;
    res.send({ transacoes, usuario });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function transacoes(req,res)
{
  const usuario = res.locals.usuario;
  console.log(usuario.nome);
  try {
    const transacoes = await db.collection("transactions")
      .find({ usuario: usuario.nome })
      .toArray();
      let aux = [];
      transacoes.forEach(e => {

          aux.push({data: e.data, descricao: e.descricao, valor: e.valor});
      });

      res.send(aux)

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}