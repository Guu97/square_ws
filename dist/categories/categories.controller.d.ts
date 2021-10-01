import { CategoriesService } from './categories.service';
import { Category } from './category';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    findCategories(uid: any): Promise<Category[]>;
}
