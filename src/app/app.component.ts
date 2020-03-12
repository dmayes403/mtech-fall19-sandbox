import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    // ** To get app started for the first time, run 'npm install' **
    // ** To start application, run 'npm start' **

    title = 'SandBox';


    ngOnInit(): void {
        // NESTED COMPONENTS DAY

        // TOY PROBLEMS - Solve the problems below as effeciently as possible.
        // Not all problems can be solved with one line of code.

        const stringCount = 'Can you count the amount of characters in this string?';
        // 1. Console log the amount of characters in the stringCount variable above.

        // 2. Console log the amount of words that exist in stringCount

        // 3. Console log the amount of 'C/c' characters in the stringCount variable above.

        const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 37, 36, 45, 48, 55];
        // 4. Console log all values from numArray that are evenly divided by 3.

        // 5. Console log the result array after removing every value that is evenly divided by 5.



        // ANGULAR PRACTICE

        // 1. Create two new components
        // 2. Make one of the components a child component by nesting it in the other (parent) component.
        // 3. Display a title on the parent component using interpolation that is bound to a variable (string)
        //    called 'title' in the parent component's typescript file. Create a second variable called 'originalTitle'
        //    that can be altered in the future.
        // 4. Use data binding to bind the 'originalTitle' variable from the parent component to the nested child component
        // 5. In the html file of the child component display the string 'How much of the title would you like to see?'
        // 6. In the html file of the child component create three buttons: one that says 'first half', one that says 'second half'
        //    and one that says 'all'.
        // 7. Create a function that when each button is clicked, emits either the first half, second half, or all of
        //    the original title back to the parent component to be displayed as the new title. You will need an event listener
        //    within the parent component to complete this.

    }

}
