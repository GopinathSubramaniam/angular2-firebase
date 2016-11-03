import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/components/login-component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './product/components/product-component';
import {CategoryComponent} from './category/components/category-component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product', component: ProductComponent },
    { path: 'category', component: CategoryComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
