import Project from "../models/Project";
import database from "../database";
import contador from "../utils/contador";

export default {
  async store(req, res) {
    const { title, tasks } = req.body;

    const id = contador();

    const project = new Project(id, title, tasks);

    database.push(project);

    return res.json(project);
  },

  async index(req, res) {
    return res.json(database);
  },

  async show(req, res) {
    const { id } = req.params;
    const tarefa = database.filter(item => item.id == id);

    return res.json(...tarefa);
  },

  async update(req, res) {
    const { id } = req.params;
    let tarefa = req.body;

    database = database.map(item => {
      if (item.id == id) {
        tarefa.id = id;
        item = tarefa;
        tarefa = item;
        return item;
      }
      return item;
    });

    return res.json(tarefa);
  },

  async delete(req, res) {
    const { id } = req.params;

    database = database.filter(item => item.id != id);

    return res.json({ mensagem: "Tarefa excluida com sucesso" });
  }
};
