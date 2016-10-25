# angular2-firebase
angular2-firebase

1. Install nodejs
2. Install generator-angular2-typescript for create angularjs2 typescript project
3. Create a project using the following command
    - yo angular2-typescript [app-name]
4. Install angularfire2 and firebase dependencies by running the following command
    - npm install angularfire2 firebase --save 
5. Import AngularFireModule in app module file
    import { AngularFireModule } from 'angularfire2';
6. Add your config in module and initialize the config in module file
        export const firebaseConfig = {
        apiKey: '<your-key>',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        storageBucket: '<your-storage-bucket>'
        }; 

7. Update @NgModule with AngularFireModule initialization 
    @NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
    })
8. Inject AngularFire in your component file:
    import { AngularFire, FirebaseListObservable } from 'angularfire2';
9. Create instance for AngularFire
        export class AppComponent {
        items: FirebaseListObservable<any[]>;
        constructor(af: AngularFire) {
            this.items = af.database.list('/items');
        }
        }
10. Definitly you will face permission denied issue from firebase. To resolve this, You need to change "RULES" in FireBase. Make "true" to read and write values.
{
  "rules": {
    ".read": true,
    ".write": true
  }
}   

For More Info: https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md