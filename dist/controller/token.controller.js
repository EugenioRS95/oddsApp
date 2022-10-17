"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameNotProvided = exports.getToken = void 0;
const config_1 = require("../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const token = jsonwebtoken_1.default.sign({ name }, config_1.SECRET, { expiresIn: 60 * 2 });
        return res.status(200).json({ token });
    }
    catch (err) {
        res.status(500).json({ err });
    }
});
exports.getToken = getToken;
const nameNotProvided = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(500).json({ message: 'Debe ingresar un parámetro con su nombre para poder obtener el token.' });
});
exports.nameNotProvided = nameNotProvided;
