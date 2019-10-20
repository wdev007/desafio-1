import { Router } from "express";
import ProjectController from "./controllers/ProjectController";

import { middlewaresVerifyId } from "./middlewares";

const routes = new Router();

routes.post("/projects", ProjectController.store);

routes.get("/projects", ProjectController.index);

routes.get("/projects/:id", middlewaresVerifyId, ProjectController.show);

routes.put("/projects/:id", middlewaresVerifyId, ProjectController.update);

routes.delete("/projects/:id", middlewaresVerifyId, ProjectController.delete);

export default routes;
