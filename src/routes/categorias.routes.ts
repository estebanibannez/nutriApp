import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  postCategorias,
  deleteCategoria,
  updateCategoria,
} from "../controllers/categorias.controller";

const router = Router();
// router.get("/", getCategorias);

router.route("/")
.get(getCategorias)
.post(postCategorias);

router.route("/:Id")
//cada vez que que se haga el get con parametro pasamos el metodo getCategoria.
.get(getCategoria)
.delete(deleteCategoria)
.put(updateCategoria);


export default router;
