import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class ChallengeService{
    public challanges:FirebaseListObservable<any[]>;
    
    constructor(private af: AngularFire){

    }

    getChallengesByType(type:any){
        console.log('Type ::: ', type);
        return this.af.database.list('/challenges/'+type);
    }
}