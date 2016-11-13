import {Component} from '@angular/core';

import {AppService} from '../../common/services/app-service';
import {CategoryService} from '../services/category-service';

@Component({
    selector: 'category',
    template: require('../views/category.html')
})


export class CategoryComponent{
    
    private categories = <any>[];
    private categoryName = '';
    private file:any;

    constructor(
        private categoryService: CategoryService,
        private appService: AppService
        ){
        this.categories = this.categoryService.getCategories();
    }

    addNewCategory(){
        var that = this;
        if(this.file){
            this.appService.uploadImage(this.file).then(function(imageUrl){
                var catObj = {name: that.categoryName, iconUrl: imageUrl};
                if(catObj.name){
                    that.categories.push(catObj);
                    that.file = '';
                    that.categoryName = '';
                }else{
                    alert('Please Enter Category Name');
                }
            });
        }else{
            alert('Please select category image');
        }
        
    }

    getImage(ev:any){
        console.log('Image :: ', ev.srcElement.files[0]);
        this.file =  ev.srcElement.files[0]
    }

    deleteCategory(){
        
    }

}