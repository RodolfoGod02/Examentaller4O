import { Router } from "express";
import { getAll } from "../controllers/usuario.controllers";

const router = Router();

router.get("/all", getAll);

export default router;