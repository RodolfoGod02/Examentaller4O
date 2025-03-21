import { Router } from "express";
import { getBD, insertBD, updateBD, deleteBD } from "../controladores/productos.controller";

const router = Router();

router.get("/", getBD);
router.post("/", insertBD);
router.put("/:id", updateBD)
router.delete("/:id", deleteBD)

export default router;