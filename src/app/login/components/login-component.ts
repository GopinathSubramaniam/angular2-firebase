import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../../common/services/app-service';
import {AppComponent} from '../../app.component';



@Component({
    selector: 'login',
    template: require('../views/login.html')
})

export class LoginComponent{
    public login: any = {};

    constructor(
        private router: Router, 
        private appService: AppService,
        private appComponent : AppComponent){

    }

    doLogin(){
        if(this.login.username && this.login.password){
            this.appComponent.isLoggedIn = true;
            this.router.navigateByUrl('home');
        }else{
            alert('Wrong username and password');
        }
    }

}