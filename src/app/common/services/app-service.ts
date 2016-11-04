import {Injectable} from '@angular/core';
import {SessionStorageService} from 'ng2-webstorage';


@Injectable()
export class AppService{
    
    constructor(private sessionStorageService: SessionStorageService){

    }

    clearSession(){
        this.sessionStorageService.clear();
    }
}