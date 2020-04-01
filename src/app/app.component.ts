import { Component, OnInit } from '@angular/core';
import planets from './planets';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    // ** To get app started for the first time, run 'npm install' **
    // ** To start application, run 'npm start' **

    title = 'SandBox';

    constructor(
        private fb: FormBuilder,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        // TOY PROBLEMS - Solve the problems below as effeciently as possible.
        // Not all problems can be solved with one line of code.


        // ANIMATIONS DAY
        // ** Note - the User interface has been updated to reflect the required properties.

        // 1. Create separate routes for the users and user-creation component that can be accessed through the mat-toolbar
        // in the app.component.html file. The user-creation route doesn't need to be dynamic, we won't be updating any users.

        // 2. Add your firebase config from a previous day to the enviornment.ts file (DO NOT COMMIT THIS). You will
        // need to uncomment a couple of angularfire modules in the app.module.ts file for this to fully work.

        // 3. Use whichever form method you prefer (reactive/template driven) to save the user
        // to a 'users' collection. If you have one that already exists, make sure that the pre-existing documents are deleted.

        // 4. Route to the users page after saving the user from #3.

        // 5. Display all of the users from your 'users' collection in the user component.

        // 6. Use the date pipe to get the creation date to look like 'Wednesday, April 2, 2020'
    }
}
