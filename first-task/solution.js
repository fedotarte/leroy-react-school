import {data} from "./data.js";
import { config } from './config.js'

const summarizeCountAndAllPrice = (arrayPar, configFileds) => 
    arrayPar.reduce(
        (result, productItem) => {
            configFileds.forEach(configField => {
                result[configField] = (result[configField] || 0) + (productItem[configField] || 0);
            });
            return result;
        }, 
        {}
    );

console.log(summarizeCountAndAllPrice(data, config.parsedFields));