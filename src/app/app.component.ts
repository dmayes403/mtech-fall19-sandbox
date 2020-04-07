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


        // IONIC COMPONENTS DAY
        // 1. Start a new ionic app with the sidemenu template and an Angular "type".
        // Refer to https://github.com/MountainlandWEB/angular/blob/master/lessons/day-20-ionic-basics-and-navigation/unit-01-ionic-basics-and-navigation.md
        // for an example on how to start a project with a side menu if you forgot how.
        // 2. Generate 2 pages - CharacterList and CharacterDetail
        // 3. Make the 'character-list' route the new landing page when going to localhost://8100
        // 4. Make each tool-bar of your new pages blue
        // 5. Put the character.ts file from the #classroom channel in your assets folder
        // 6. Create a variable in your CharacterList component to store the character data
        // 7. Display each of those characters in the CharacterList component
        // 8. Create the ability to click on a character and then route to the CharacterDetail
        //    page to display the detail of the character.
    }
}
