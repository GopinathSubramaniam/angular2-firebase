import {Component} from '@angular/core';
// import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {AngularFire, FirebaseListObservable } from 'angularfire2';

import {ProductService} from '../services/product-service';

@Component({
    selector: 'product',
    template: require('../views/product.html')
})

export class ProductComponent{
    title: string;
    message: string;
    products:Array<any>;
    items: FirebaseListObservable<any[]>;
    public newProd: any = {};

    constructor(
        productService: ProductService, 
        af: AngularFire
        ){
        this.title = 'Product Page';
        this.message = 'This is product page';
        this.products = productService.getProducts();
        this.items = af.database.list('/items'); // Fetch all data 
        
        //Fetch data by some value
        /*this.items = af.database.list('/items', {
           query: {
                orderByChild: 'code',
                equalTo: '01002'
           }
        });*/
    }

    createNewProduct(){
        console.log('Model ::: ', this.newProd);
        this.items.push(this.newProd);
    }
 
}