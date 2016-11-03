import {Injectable} from '@angular/core';

@Injectable()
export class AppService{
    public isLoggedIn: Boolean = false;
    public links:Array<any> = [];
    constructor(){

    }

    setIsLoggedIn(value:any){
        this.isLoggedIn = value;
    }

}