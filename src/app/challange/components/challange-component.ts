import {Component} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';

import {ChallangeService} from '../services/challange-service';

@Component({
    selector: 'challange',
    template: require('../views/challange.html')
})

export class ChallangeComponent{

    private challanges:FirebaseListObservable<any[]>; 
    private challange:any= {};
    
    constructor(private challangeService: ChallangeService ){
        this.challanges = challangeService.getChallangesByType('Vegetables');
    }

}