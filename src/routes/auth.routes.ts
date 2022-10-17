import { Router } from "express";
import { getToken, nameNotProvided } from "../controller/token.controller";

const router = Router();

router.get("/:name", getToken);
router.get("/", nameNotProvided);

export default router;