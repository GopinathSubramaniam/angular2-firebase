import {Component} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';

import {AppService} from '../../common/services/app-service';
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
    private file:any;
    
    constructor(
        private appService: AppService,
        private challengeService: ChallengeService,
        private categoryService: CategoryService ){
        this.challenges = this.challengeService.getChallengesByType('Vegetables');
        this.categories = this.categoryService.getCategories();
    }

    createChallange(ev:any){
        console.log('ev ::: ', this.file);
        var that = this;
        this.appService.uploadImage(this.file).then(function(imageUrl){
            console.log('Image Url :::: '+imageUrl);
            if(that.challenge.option1 && that.challenge.option2 && that.challenge.option3){
                console.log('Challenge :::: ',that.challenge);
                that.challenge.question = imageUrl;
                that.challenges.push(that.challenge);
                // Reset challenge form
                that.challenge.category = '';
                that.challenge.question = '';
                that.challenge.option1 = '';
                that.challenge.option2 = '';
                that.challenge.option3 = '';
                that.challenge.option4 = '';
                console.log(':::: Challenge Saved :::: ');
            }
        });
    }

    uploadImage(ev:any){
        console.log('Image :: ', ev.srcElement.files[0]);
        this.file =  ev.srcElement.files[0]
        /*this.appService.uploadImage(ev.srcElement.files[0]).then(function(imageUrl){
            console.log('Image Url :::: '+imageUrl);
        });*/
    }

}