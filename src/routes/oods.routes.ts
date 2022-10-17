import { Router } from "express";
import { getOptionByProbability } from "../controller/odds.controller";
import { verifyToken } from "../middlewares/authJwt";

const router = Router();

router.post("/",[verifyToken],getOptionByProbability);

export default router;