import { Category } from './category';
export declare class CategoriesService {
    contructor(): void;
    findCategories(uid: string): Promise<Category[]>;
}
