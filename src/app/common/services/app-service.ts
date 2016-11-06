import {Injectable, Inject} from '@angular/core';
import {SessionStorageService} from 'ng2-webstorage';
import { FirebaseApp  } from 'angularfire2';


@Injectable()
export class AppService{
    private storageRef = <any>{};
    private firebaseStorage:any;

    constructor(
        private sessionStorageService: SessionStorageService,
        @Inject(FirebaseApp) firebaseApp : any
        ){
        this.firebaseStorage = firebaseApp.storage().ref();
    }

    clearSession(){
        this.sessionStorageService.clear();
    }

    uploadImage(file:any){
        console.log('File :::: ', file.name);
        let child = this.firebaseStorage.child('/images/'+file.name);
        child.put(file);
       
    }
}