"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptionsList = exports.getOption = void 0;
const config_1 = require("../config");
const WeightedList = require('js-weighted-list');
function getOption(optionsLits) {
    const data = optionsLits.map(option => {
        return [option.name, option.probability];
    });
    const wl = new WeightedList(data);
    const result = wl.peek();
    return result;
}
exports.getOption = getOption;
function validateOptionsList(optionsLits) {
    const limit = +String(config_1.OPTIONS_LIMIT);
    let arrOptions;
    if (optionsLits.length > limit) {
        throw new Error('Se ha excedido el número de opciones permitidos(5).');
    }
    arrOptions = optionsLits.flatMap(obj => {
        if (!obj.hasOwnProperty('name')) {
            throw new Error('La opción no tiene el campo (name)');
        }
        if (!obj.hasOwnProperty('probability')) {
            throw new Error('La opción no tiene el campo (probability)');
        }
        validateProbabilityOption(obj);
        return obj;
    });
    arrOptions = searchDuplicates(arrOptions);
    return sumAllOdds(arrOptions);
}
exports.validateOptionsList = validateOptionsList;
function searchDuplicates(optionsList) {
    let arr = [];
    for (let i = 0; i < optionsList.length; i++) {
        let obj = arr.find(opt => {
            return opt.name === optionsList[i].name;
        });
        if (obj === undefined) {
            arr.push(optionsList[i]);
        }
        else {
            let indx = arr.findIndex(opt => opt.name == optionsList[i].name);
            arr[indx].probability = arr[indx].probability + optionsList[i].probability;
        }
    }
    return arr;
}
function validateProbabilityOption(option) {
    if (option.probability < 0) {
        throw new Error('La probabilidad de la opcion no debe ser menor a 0.');
    }
}
function sumAllOdds(list) {
    const sum = list.map(item => item.probability).reduce((prev, curr) => prev + curr, 0);
    if (sum > 100) {
        throw new Error('La suma de probabilidades no debe ser mayor a 100.');
    }
    if (sum < 100) {
        list.push({ name: "indeterminado", probability: 100 - sum });
    }
    return list;
}
