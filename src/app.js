import express from "express";
import routes from "./routes";

import { middlewaresConsole } from "./middlewares";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(middlewaresConsole);
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
