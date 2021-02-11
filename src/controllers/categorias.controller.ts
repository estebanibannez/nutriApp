import { Request, Response } from "express";
import { conectdb } from "../database";
import { Categorias } from "../interfaces/Categorias";

//metodo que obtiene toda la data de la tabla 
export async function getCategorias(
  req: Request,
  res: Response
): Promise<Response> {
  const conn = await conectdb();
  const query = await conn.query("SELECT * FROM grupoalimenticio");

  return res.json({ status: 200, message: "OK", data: query[0] });
}

//metodo que guarda la data en la BD
export async function postCategorias(req: Request, res: Response) {
  //recibo los datos desde request body
  let data: Categorias = req.body;
  data.fecha_creacion = new Date();

  const conn = await conectdb();  
  await conn.query(`INSERT INTO grupoalimenticio SET ?`, [data]);

  return res.json({
    status: 200,
    message: "OK",
    data: data,
  });
}

//metodo que consulta por un solo registro a través de un parametro pasado en la url
export async function getCategoria(req: Request , res: Response): Promise<Response>{
    const id = req.params.Id;
    const conn = await conectdb();
    const query = await conn.query(`SELECT * FROM grupoalimenticio WHERE id= ?`, [id]);

    if(query.length <= 0)
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
}
//metodo que elimina un registro de la tabla
export async function deleteCategoria(req : Request, res: Response){
    const id = req.params.Id;
    const conn = await conectdb();
    const query = await conn.query(`DELETE FROM grupoalimenticio WHERE id= ?`,[id]);
    return res.json({
        status: 200,
        message: "Registro eliminado éxitosamente.",
        data: query[0],
    });
}



//metodo que actualiza un registro de la tabla
export async function updateCategoria(req : Request, res: Response){
  const id = req.params.Id;
  const body : Categorias = req.body;
  console.log(body)
  const conn = await conectdb();
  const query = await conn.query(`UPDATE grupoalimenticio SET ? WHERE id= ?`,[ body , id]);
  return res.json({
      status: 200,
      message: "Registro actualizado éxitosamente.",
      data: query[0],
  });
}
