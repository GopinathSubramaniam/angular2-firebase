import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class CategoryService{
    
    private categories:FirebaseListObservable<any[]>;
    
    constructor(private af: AngularFire){
        
    }

    getCategories(){
        this.categories = this.af.database.list('/categories');
    }

}