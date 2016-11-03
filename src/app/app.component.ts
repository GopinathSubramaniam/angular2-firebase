import {Component, OnInit} from '@angular/core';

import {AppService} from './common/services/app-service';

import '../css/bootstrap.min.css';
import '../css/main.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {

    public isLoggedIn: Boolean = false;

    constructor(public appService: AppService){
        
    }

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
