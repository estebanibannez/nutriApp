import { Request, Response } from "express";

export function InicioController(req: Request, res: Response): Response {
  return res.json("Bienvenido test");
}
