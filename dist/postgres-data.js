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
exports.updateUserById = exports.getUserById = exports.deleteUserById = exports.addNewUser = exports.getUsers = void 0;
const data_source_1 = require("./data-source");
const User_1 = require("./User");
const userRepository = data_source_1.myDataSource.getRepository(User_1.User);
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userRepository.find();
            return users;
        }
        catch (error) {
            return null;
        }
    });
}
exports.getUsers = getUsers;
function addNewUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = userRepository.create(user);
            yield userRepository.save(newUser);
            return newUser;
        }
        catch (error) {
            return null;
        }
    });
}
exports.addNewUser = addNewUser;
function deleteUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield userRepository.delete(id);
        return user;
    });
}
exports.deleteUserById = deleteUserById;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield userRepository.findOneBy({ id });
        return user;
    });
}
exports.getUserById = getUserById;
function updateUserById(id, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield userRepository.findOneBy({ id });
        if (!user) {
            return null;
        }
        userRepository.merge(user, updatedData);
        yield userRepository.save(user);
        return user;
    });
}
exports.updateUserById = updateUserById;
