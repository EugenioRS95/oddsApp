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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionByProbability = void 0;
const validateBody_1 = require("../utils/validateBody");
const getOptionByProbability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let list = req.body;
    try {
        list = (0, validateBody_1.validateOptionsList)(list['options']);
        const option = (0, validateBody_1.getOption)(list);
        res.status(201).json({ option: option[0], list: list });
    }
    catch (err) {
        console.log(err);
        const errorMessage = err.message;
        res.status(500).json({ err: errorMessage });
    }
});
exports.getOptionByProbability = getOptionByProbability;
