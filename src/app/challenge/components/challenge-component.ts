import {Component} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';

import {ChallengeService} from '../services/challenge-service';
import {CategoryService} from '../../category/services/category-service';

@Component({
    selector: 'challange',
    template: require('../views/challenge.html')
})

export class ChallengeComponent{

    private challenges = <any>[]; 
    private categories = <any>[];
    private challenge:any= {};
    
    constructor(
        private challengeService: ChallengeService,
        private categoryService: CategoryService ){
        this.challenges = this.challengeService.getChallengesByType('Vegetables');
        this.categories = this.categoryService.getCategories();
    }

    createChallange(){
        console.log('Challenge :::: ',this.challenge);
        this.challenges.push(this.challenge);
        this.challenge.category = '';
        this.challenge.question = '';
        this.challenge.option1 = '';
        this.challenge.option2 = '';
        this.challenge.option3 = '';
        this.challenge.option4 = '';
        console.log(':::: Challenge Saved :::: ');
    }

}