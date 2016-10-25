import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable } from 'angularfire2';

import {ProductService} from '../services/product-service';

@Component({
    selector: 'product',
    template: require('../views/product.html'),
    // providers: [ProductService]
})

export class ProductComponent{
    title: string;
    message: string;
    products:Array<any>;
    items: FirebaseListObservable<any[]>;
    constructor(
        productService: ProductService, 
        af: AngularFire
        ){
        this.title = 'Product Page';
        this.message = 'This is product page';
        this.products = productService.getProducts();
        this.items = af.database.list('/items');
    }

 
}