"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const user_1 = require("../user/user");
let UsersService = class UsersService {
    constructor() {
    }
    getHello() {
        return 'user';
    }
    async findUser(uid) {
        console.log("uid: " + uid);
        const doc = await database_service_1.DatabaseService.db.collection('users').doc(uid).get();
        var user = new user_1.User();
        console.log('doc: ' + doc.exists);
        if (!doc.exists) {
            console.log('No such document!');
            return user;
        }
        else {
            console.log('Document data:', doc.data());
            user = doc.data();
            return user;
        }
    }
    async findAll() {
        var users = [];
        const snapshot = await database_service_1.DatabaseService.db.collection('users').get();
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            var u = new user_1.User();
            u = doc.data();
            users.push(u);
        });
        return users;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map