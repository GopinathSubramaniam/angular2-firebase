import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {Ng2Webstorage} from 'ng2-webstorage';
import {ButtonsModule, ModalModule } from 'ng2-bootstrap';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';

import {LoginComponent} from './login/components/login-component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './product/components/product-component';
import {CategoryComponent} from './category/components/category-component';
import {ChallengeComponent} from './challenge/components/challenge-component';

import {AppService} from './common/services/app-service';
import {ProductService} from './product/services/product-service';
import {CategoryService} from './category/services/category-service';
import {ChallengeService} from './challenge/services/challenge-service';


export const firebaseConfig = {
    apiKey: 'AIzaSyAysE_spRpgOzdoV_1SwQdp-AguqzjlK5U',
    authDomain: 'myapp-7c026.firebaseapp.com',
    databaseURL: 'https://myapp-7c026.firebaseio.com',
    storageBucket: 'myapp-7c026.appspot.com'
};

const firebaseAuthConfigWgs = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
  remember: 'default',
  scope: ['email', 'profile']
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AboutComponent,
        ProductComponent,
        CategoryComponent,
        ChallengeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfigWgs),
        AngularFireModule.initializeApp(firebaseConfig),
        routing,
        Ng2Webstorage,
        ButtonsModule,
        ModalModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule 
    ],
    providers: [appRoutingProviders, AppService, ProductService, CategoryService, ChallengeService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
