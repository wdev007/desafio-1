import { Router } from "express";

const routes = new Router();

routes.post("/projects", (req, res) => {
  return res.json({ ok: true });
});

routes.get("/projects", (req, res) => {
  return res.json({ ok: true });
});

export default routes;
