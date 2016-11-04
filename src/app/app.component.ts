import {Component, OnInit} from '@angular/core';
import {LocalStorage, SessionStorage} from 'ng2-webstorage';
import {Router} from '@angular/router';

import {AppService} from './common/services/app-service';

import '../css/bootstrap.min.css';
import '../css/main.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {

    @SessionStorage()
    public isLoggedIn: Boolean;

    constructor(
        private router: Router,
        private appService: AppService){
    }

    ngOnInit() {
        console.log('AppComponent initializing...');
    }

    doLogout(){
        this.appService.clearSession();
        this.router.navigateByUrl('');
    }

}
