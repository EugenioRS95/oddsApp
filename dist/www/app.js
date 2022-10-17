"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const oods_routes_1 = __importDefault(require("../routes/oods.routes"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const config_1 = require("../config");
const app = (0, express_1.default)();
exports.app = app;
//Settings
app.set('port', config_1.PORT || 3000);
app.set("json spaces", 4);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/api/odds", oods_routes_1.default);
app.use("/api/auth", auth_routes_1.default);
