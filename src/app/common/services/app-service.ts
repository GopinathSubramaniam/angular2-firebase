import {Injectable} from '@angular/core';
import {SessionStorageService} from 'ng2-webstorage';
import {FirebaseApp} from 'angularfire2';


@Injectable()
export class AppService{
    private storageRef = <any>{};

    constructor(
        private sessionStorageService: SessionStorageService
        ){
        // this.storageRef = FirebaseApp
    }

    clearSession(){
        this.sessionStorageService.clear();
    }
}