import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Category } from './category';

@Injectable()
export class CategoriesService {
    contructor(){

    }

    async findCategories(uid:string):Promise<Category[]>{
        var categories = <Category[]>[];
        console.log(uid);
        const snap = await DatabaseService.db.collection('categories').doc(uid).collection('categories').get();
        snap.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
            var cat: Category = new Category();
            cat = doc.data();
            categories.push(cat);
        });
        

        return categories;
    }
}
