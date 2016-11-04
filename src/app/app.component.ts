import {Component, OnInit} from '@angular/core';
import {LocalStorage, SessionStorage} from 'ng2-webstorage';

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

    constructor(public appService: AppService){
        
    }

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
