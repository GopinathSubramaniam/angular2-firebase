import {Component} from '@angular/core';

import {CategoryService} from '../services/category-service';

@Component({
    selector: 'category',
    template: require('../views/category.html')
})


export class CategoryComponent{
    
    private categories = <any>[];

    constructor(private categoryService: CategoryService){
        this.categories = this.categoryService.getCategories();
    }



}