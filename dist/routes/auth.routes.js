"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const token_controller_1 = require("../controller/token.controller");
const router = (0, express_1.Router)();
router.get("/:name", token_controller_1.getToken);
router.get("/", token_controller_1.nameNotProvided);
exports.default = router;
