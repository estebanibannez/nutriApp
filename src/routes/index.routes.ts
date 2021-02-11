import { Router } from "express";
const router = Router();
import { InicioController } from "../controllers/index.controller";

router.route("/")
.get(InicioController);

export default router;
