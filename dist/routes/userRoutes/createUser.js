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
// import { addNewUser } from '../../postgres-data';
const data = require('../../postgres-data');
module.exports = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const age = parsedBody.get('age');
        if (name && age) {
            const user = { name, age: parseInt(age) };
            const newUser = yield data.addNewUser(user);
            if (newUser) {
                res.writeHead(201);
                res.end(JSON.stringify(newUser));
            }
            else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'Resource not found' }));
            }
        }
        else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: 'Name and age are required' }));
        }
    }));
};
