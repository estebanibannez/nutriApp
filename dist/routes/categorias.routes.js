"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorias_controller_1 = require("../controllers/categorias.controller");
const router = express_1.Router();
router.route("/")
    .get(categorias_controller_1.getCategorias)
    .post(categorias_controller_1.postCategorias);
router.route("/:Id")
    //cada vez que que se haga el get con parametro pasamos el metodo getCategoria.
    .get(categorias_controller_1.getCategoria)
    .delete(categorias_controller_1.deleteCategoria)
    .put(categorias_controller_1.updateCategoria);
exports.default = router;
