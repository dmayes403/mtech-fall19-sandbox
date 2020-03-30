import { Component, OnInit } from '@angular/core';
import planets from './planets';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    // ** To get app started for the first time, run 'npm install' **
    // ** To start application, run 'npm start' **

    title = 'SandBox';
    imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSzrAXk1k39T9k5i8Z81CYkBAMtZDIHMXptgXlLkY6a0L08Ixl';
    todaysDate = new Date();

    firstName: string;
    isCool: boolean;

    lastName = new FormControl();

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        // private db: AngularFirestore
    ) {}

    ngOnInit(): void {
        // TOY PROBLEMS - Solve the problems below as effeciently as possible.
        // Not all problems can be solved with one line of code.


        // FIREBASE LISTS DAY - Use the zoom chat to ask me any questions that you might be stuck on along the way.

        // 1. Go to the firebase database that we created last time I taught. Add a collection called 'users'. Create a single
        // document under that collection with the properties (add a value for each): firstName, lastName, phone, email, and zip.

        // 2. Add your firebase config to the environment.ts file (DO NOT COMMIT THIS)

        // 3. Comment out the code that's currently in the app.component.html file. Create a reactive form with inputs that
        // will hold a value for each of the properties created in problem 1.

        // 4. After the user updates the inputs, save those changes (button that can be clicked) to
        // the document you originally created in problem 1.



        // FIREBASE DOCUMENTS DAY
        // 1. Sum the array below using *two* different ways
        // const arrOfNums = [1, 4, 7, 3, 8, 99, 3, 4, 55, 6, 33, 4, 123];
        // let sum = 0;
        // arrOfNums.forEach(num => {
        //     sum += num;
        // });
        // console.log(sum);

        // console.log(arrOfNums.reduce((a, b) => a + b));

        // this.lastName.valueChanges.subscribe(value => console.log(value));

        // 2. In the app.component.html use the following template driven form elements below. Each element
        //     should be bound to a value in your typescript file. Have a button that when clicked
        //     displays each of the form values.
        //     - input
        //     - checkbox
        //     - radio button
        //     - slide toggle

        // 3. Add a "select" and an "input" form element that can be used as a reactive form element. Subscribe to the value
        //     changes and display the values in the console.



        // TEMPLATE DRIVEN FORMS DAY
        // 1. Go to https://swapi.co/ in the input type 'starships' and push the request button. Create an
        // interface that holds all the properties of a starship.

        // 2. Referencing the planet.ts file, display the name of every planet that appeared in the 6th Star Wars film.
        // planets.forEach(planet => {
        //     planet.films.forEach(film => {
        //         if (film.match(/\d/)[0] === '6') {
        //             console.log(planet.name);
        //         }
        //     });
        // });

        // 3. Given the evenOccurrnceArr variable below, find the first item that occurs an even number of times
        // in an array. Remember to handle multiple even-occurrence items and return the first one. Return null
        // if there are no even-occurrence items.
        const evenOccurrnceArr = [1, 3, 3, 3, 2, 4, 4, 2, 5, 7, 7];
        const numbersObj = {};
        // let firstEven;
        // evenOccurrnceArr.forEach(num => {
        //     if (!numbersObj[num]) {
        //         numbersObj[num] = 1;
        //     } else if (numbersObj[num]) {
        //         numbersObj[num]++;
        //     }
        // });
        // console.log(firstEven);

        // 4. Given the array of words below display if each word is a palindrome or not.
        const palindrome = ['Kayak', 'steve', 'toyota', 'rotator', 'No lemon, no melon', 'potato', 'Solo'];

        // 5. Add all the code necessary to get routing to work.


        // HTTP DAY
        const alphabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

        // 1. Given the array of numbers below, console log the associated letters from above to make a sentence.
        const numbers = [23, 5, 12, 3, 15, 13, 5, 0, 20, 15, 0, 3, 12, 1, 19, 19];
        // for (let i = 0; i < numbers.length; i++) {
        //     console.log(alphabet[numbers[i]]);
        // }

        // let str = '';
        // for (let i = 0; i < numbers.length; i++) {
        //     str = str + alphabet[numbers[i]];
        // }
        // console.log(str);


        // 2. Create a div in the app.component.html file and use interpolation to display the title variable from above.

        // 3. Create a variable within AppComponent called todaysDate and set it equal to today's date (hint use 'new Date()').
        //    Create a div in the html to display the date and use a pipe(s) to make it look like "WEDNESDAY, MARCH 18, 2020"

        // 4. Using the 'imgUrl' variable from above display that image in the browser.

        // 5. Use Angular's `ngClass` property to style the background of your div from problem #2 to be blue if there are more
        //    than four characters in the title variable


        // ANGULAR PRACTICE

        // 1. Import HttpClientModule into the app.module.ts file
        // 2. Create a 'MealService'
        // 3. Inject the HttpClient into 'MealService'
        // 4. Create a method that makes an api call to 'https://www.themealdb.com/api/json/v1/1/search.php?f=a' and
        //    returns the value as an observable. The method should accept a parameter that can be used to make
        //    'a' at the end of the api url dynamic.
        // 5. In the app.component.ts file within the 'ngOnInit' use a 'combineLatest' to make two separate calls
        //    to your 'MealService' to call your api method twice using two different search letters.
        // 6. Filter the results down to meals that are either Desserts or are American
        // 7. Set variables in the app.component.ts file equal to the desserts and the meals that are American.
        // 7. In the app.component.html file, display two lists: one for desserts and one for meals that are American.
        // 8. In each list item display the meal id, the meal name, the meal area, and the meal thumbnail.
        // 9. BONUS - use an iframe to display the youtube clip.






        // NESTED COMPONENTS DAY

        const stringCount = 'Can you count the amount of characters in this string?';
        // 1. Console log the amount of characters in the stringCount variable above.
        // console.log(stringCount.length);

        // 2. Console log the amount of words that exist in stringCount
        // console.log(stringCount.split(' ').length);

        // 3. Console log the amount of 'C/c' characters in the stringCount variable above.
        const newArr = [];
        const secondArr = stringCount.split('');
        secondArr.forEach(c => {
            if (c.toLowerCase() === 'c') {
                newArr.push(c);
            }
        });
        // console.log(newArr.length);

        const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 37, 36, 45, 48, 55];
        // 4. Console log all values from numArray that are evenly divided by 3.
        // console.log(numArray.filter(x => x % 3 === 0));

        // 5. Console log the result array after removing every value that is evenly divided by 5.
        // console.log(numArray.filter(num => num % 5 !== 0));


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

    seeValues() {
        console.log('The values are: ');
        console.log('first name: ' + this.firstName);
        console.log('isCool: ' + this.isCool);
    }
}
