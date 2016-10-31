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
    public newUser: any = {};
    public auth: any = {};

    constructor(
        public productService: ProductService, 
        public af: AngularFire
        ){
        this.title = 'Product Page';
        this.message = 'This is product page';
        this.products = productService.getProducts();
        // this.items = af.database.list('/items'); // Fetch all data 
        
        //Fetch data by some value
        this.items = af.database.list('/items', {
           query: {
                orderByChild: 'prodName',
                equalTo: 'P1'
           }
        });

    }

    createNewProduct(){
        console.info('Model ::: ', this.newProd);
        this.items.push(this.newProd);
    }

    createNewUser(){
        this.af.auth.createUser({email: 'gopiwrld@gmail.com', password: '1234567890'}).catch(function(error:any){
            console.info('Error ::: ', error);
            var errorCode = error.code;
            var errorMessage = error.message;
       });
    }

}