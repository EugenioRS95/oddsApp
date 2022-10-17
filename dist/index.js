"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = require("./www/app");
dotenv_1.default.config();
app_1.app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});
