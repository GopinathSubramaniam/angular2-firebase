import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AngularFireModule } from 'angularfire2';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './product/components/product-component';

import {ProductService} from './product/services/product-service';

export const firebaseConfig = {
    apiKey: 'AIzaSyAysE_spRpgOzdoV_1SwQdp-AguqzjlK5U',
   // authDomain: 'myapp-7c026.firebaseapp.com',
    authDomain: 'myapp-7c026.firebaseapp.com',
    databaseURL: 'https://myapp-7c026.firebaseio.com',
    storageBucket: 'myapp-7c026.appspot.com'
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        routing
    ],
    providers: [appRoutingProviders, ProductService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
