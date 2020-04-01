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



    }
}
