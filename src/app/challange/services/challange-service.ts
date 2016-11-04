import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class ChallangeService{
    
    constructor(private af: AngularFire){

    }

    getChallangesByType(type:any){
        return this.af.database.list('/challanges/'+type);
    }
}