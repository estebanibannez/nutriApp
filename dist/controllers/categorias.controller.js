"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoria = exports.deleteCategoria = exports.getCategoria = exports.postCategorias = exports.getCategorias = void 0;
const database_1 = require("../database");
//metodo que obtiene toda la data de la tabla 
function getCategorias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.conectdb();
        const query = yield conn.query("SELECT * FROM grupoalimenticio");
        return res.json({ status: 200, message: "OK", data: query[0] });
    });
}
exports.getCategorias = getCategorias;
//metodo que guarda la data en la BD
function postCategorias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //recibo los datos desde request body
        let data = req.body;
        data.fecha_creacion = new Date();
        const conn = yield database_1.conectdb();
        yield conn.query(`INSERT INTO grupoalimenticio SET ?`, [data]);
        return res.json({
            status: 200,
            message: "OK",
            data: data,
        });
    });
}
exports.postCategorias = postCategorias;
//metodo que consulta por un solo registro a través de un parametro pasado en la url
function getCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.Id;
        const conn = yield database_1.conectdb();
        const query = yield conn.query(`SELECT * FROM grupoalimenticio WHERE id= ?`, [id]);
        if (query.length <= 0)
            return res.json({
                status: 200,
                message: "No se encontraron resultados.",
                data: query,
            });
        else
            return res.json({
                status: 200,
                message: "Resultados encontrados.",
                data: query[0],
            });
    });
}
exports.getCategoria = getCategoria;
//metodo que elimina un registro de la tabla
function deleteCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.Id;
        const conn = yield database_1.conectdb();
        const query = yield conn.query(`DELETE FROM grupoalimenticio WHERE id= ?`, [id]);
        return res.json({
            status: 200,
            message: "Registro eliminado éxitosamente.",
            data: query[0],
        });
    });
}
exports.deleteCategoria = deleteCategoria;
//metodo que actualiza un registro de la tabla
function updateCategoria(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.Id;
        const body = req.body;
        console.log(body);
        const conn = yield database_1.conectdb();
        const query = yield conn.query(`UPDATE grupoalimenticio SET ? WHERE id= ?`, [body, id]);
        return res.json({
            status: 200,
            message: "Registro actualizado éxitosamente.",
            data: query[0],
        });
    });
}
exports.updateCategoria = updateCategoria;
