"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = exports.OPTIONS_LIMIT = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT || 4000;
exports.OPTIONS_LIMIT = process.env.OPTIONS_LIMIT;
exports.SECRET = process.env.SECRET || 'secreto';
