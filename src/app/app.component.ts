import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    // ** To get app started for the first time, run 'npm install' **
    // ** To start application, run 'npm start' **

    title = 'SandBox';

    constructor() {}

    ngOnInit(): void {
        // TOY PROBLEMS - Solve the problems below as effeciently as possible.
        // Not all problems can be solved with one line of code.


        // IONIC BASICS AND NAVIGATION DAY
        // 1. Add your firebase config from Wednesday's class to the environment.ts file. (DO NOT COMMIT THIS).

        // 2. A new property has been added to the User interface called 'show'. When the users component
        // first pulls in the list of users from your firsbase collection (these should exist from Wednesday, if not,
        // go ahead and save a few using the user-creation component), set each 'show' property to true.

        // 3. In the users.component.html file, when the trash icon is clicked use a structural directive
        // to remove the whole card from the view.

        // 4. Add an animation to the users.component.ts file to help the user cards fade in and out upon
        // entering and leaving the DOM.
    }
}
