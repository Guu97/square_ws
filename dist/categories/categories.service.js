"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const category_1 = require("./category");
let CategoriesService = class CategoriesService {
    contructor() {
    }
    async findCategories(uid) {
        var categories = [];
        console.log(uid);
        const snap = await database_service_1.DatabaseService.db.collection('categories').doc(uid).collection('categories').get();
        snap.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            var cat = new category_1.Category();
            cat = doc.data();
            categories.push(cat);
        });
        return categories;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map