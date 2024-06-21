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
// import { deleteUserById } from '../../postgres-data';
const data = require('../../postgres-data');
module.exports = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.url.split('/')[2]);
    const result = yield data.deleteUserById(id);
    if (result.affected) {
        res.writeHead(200);
        res.end(JSON.stringify(result.affected));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Resource not found' }));
    }
});
