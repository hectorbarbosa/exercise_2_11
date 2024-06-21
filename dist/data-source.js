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
exports.initDataSource = exports.myDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
// string literal required for DataSourse type
let db;
const dbtype = process.env.DB_TYPE;
if (dbtype === 'postgres' || dbtype === 'mysql' || dbtype === 'mariadb') {
    db = dbtype;
}
else {
    db = 'postgres';
}
exports.myDataSource = new typeorm_1.DataSource({
    type: db,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User_1.User],
    synchronize: true,
});
const initDataSource = () => __awaiter(void 0, void 0, void 0, function* () {
    exports.myDataSource.initialize();
    console.log('Database connected and initialized');
});
exports.initDataSource = initDataSource;
(0, exports.initDataSource)().catch((error) => console.log('Database connection error:', error));
