import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {

    message: string;
    constructor(){
        this.message = 'This is message from Gopi';
    }
}
