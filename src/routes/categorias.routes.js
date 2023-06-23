import {Router} from "express";

import { methodsHTTP as categoriaController} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", categoriaController.getcategorias);

export default router;