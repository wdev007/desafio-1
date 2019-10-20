import database from "../database";

let contador = 1;

export function middlewaresConsole(req, res, next) {
  console.log(`A api foi chamada ${contador++} vezes`);
  next();
}

export function middlewaresVerifyId(req, res, next) {
  const { id } = req.params;
  const exists = database.filter(item => item.id == id);
  console.log(exists);

  if (exists.length == 0)
    return res.status(401).json({ error: "A tarefa não existe" });

  next();
}
