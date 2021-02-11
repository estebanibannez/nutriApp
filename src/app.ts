import express, { Application } from "express";
import morgan from "morgan";

//importo las rutas
import indexRoutes from "./routes/index.routes";
import categoriasRoutes from "./routes/categorias.routes";

export class App {
  //propiedad sin alcance fuera de la clase.
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  //metodo que se encarga de definir variables y configuraciones de entorno
  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middlewares() {
    //como valor mostraremos algunos mensajes de desarrollo
    this.app.use(morgan("dev"));
    // this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(indexRoutes);
    this.app.use("/categorias", categoriasRoutes);
  }

  //metodo escucha.
  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Servidor en puerto", this.app.get("port"));
  }
}
