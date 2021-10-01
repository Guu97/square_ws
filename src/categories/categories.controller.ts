import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService){

    }

    @Get(':uid')
    async findCategories(@Param('uid') uid):Promise<Category[]>{
        return this.categoriesService.findCategories(uid);
    }
}
