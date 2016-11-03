import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AngularFireModule } from 'angularfire2';
import {ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';

import {LoginComponent} from './login/components/login-component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './product/components/product-component';

import {AppService} from './common/services/app-service';
import {ProductService} from './product/services/product-service';

export const firebaseConfig = {
    apiKey: 'AIzaSyAysE_spRpgOzdoV_1SwQdp-AguqzjlK5U',
    authDomain: 'myapp-7c026.firebaseapp.com',
    databaseURL: 'https://myapp-7c026.firebaseio.com',
    storageBucket: 'myapp-7c026.appspot.com'
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AboutComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        routing,
        ButtonsModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule 
    ],
    providers: [appRoutingProviders, AppService, ProductService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
