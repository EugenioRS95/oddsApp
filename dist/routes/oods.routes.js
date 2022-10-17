"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const odds_controller_1 = require("../controller/odds.controller");
const authJwt_1 = require("../middlewares/authJwt");
const router = (0, express_1.Router)();
router.post("/", [authJwt_1.verifyToken], odds_controller_1.getOptionByProbability);
exports.default = router;
